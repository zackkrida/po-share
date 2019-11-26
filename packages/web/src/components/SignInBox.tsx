import cookie from 'cookie'
import { Person, useAuthenticateMutation } from '@po-share/queries'
import { FormEventHandler, useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import redirect from '../lib/redirect'
import { TextInput } from './TextInput'
import { Stack } from './Stack'
import { Button } from './Button'

export const SigninBox = () => {
  const client = useApolloClient()
  const [authenticate] = useAuthenticateMutation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault()

    // Clear existing errors
    if (error) setError('')

    try {
      // Remove any existing auth cookies before attempting to sign in. This can prevent isseus where existing logins have expired.
      document.cookie = cookie.serialize('poToken', '', { maxAge: -1 })

      const { data, errors } = await authenticate({
        variables: {
          email,
          password,
        },
      })

      console.log(data, errors)

      // Clear inputs
      setEmail('')
      setPassword('')

      if (!errors && data && data.authenticate && data.authenticate.jwtToken) {
        // Store the token in cookie
        document.cookie = cookie.serialize(
          'poToken',
          data.authenticate.jwtToken,
          {
            maxAge: 30 * 24 * 60 * 60, // 30 days
          }
        )

        // Force a reload of all the current queries now that the user is
        // logged in
        client.clearStore().then(() => {
          redirect({}, '/')
        })
      } else {
        // our login failed
        setError('Invalid credentials, please try again.')
      }
    } catch (error) {
      setError('Something went wrong, please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <h1>Sign in to po-share</h1>

        <TextInput
          label="Email"
          onChange={event => setEmail(event.currentTarget.value)}
          name="email"
          value={email}
          type="text"
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={event => setPassword(event.currentTarget.value)}
        />

        {error && <div>{error}</div>}

        <Button type="submit" onClick={e => console.log(e)}>
          Log In
        </Button>
      </Stack>
    </form>
  )
}
