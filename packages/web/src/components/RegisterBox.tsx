import {
  useRegisterUserMutation,
  useAuthenticateMutation,
} from '@po-share/queries'
import cookie from 'cookie'
import redirect from '../lib/redirect'
import { useState, EventHandler, FormEvent } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { Stack } from './Stack'
import { Button } from './Button'
import { TextInput } from './TextInput'
import { slugify } from '../lib/utils'

export const RegisterBox = () => {
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const [register] = useRegisterUserMutation()
  const [login] = useAuthenticateMutation()
  const client = useApolloClient()

  const handleSubmit: EventHandler<FormEvent> = async event => {
    event.preventDefault()
    event.stopPropagation()

    try {
      // first delete remove any lingering cookies
      document.cookie = cookie.serialize('poToken', '', { maxAge: -1 })

      const { errors } = await register({
        variables: {
          input: {
            firstName,
            lastName,
            email,
            password,
            username,
            slug: slugify(username),
          },
        },
      })

      if (errors) {
        throw Error(`Errors in Graphql Response: ${JSON.stringify(errors)}`)
      }

      const { data, errors: loginErrors } = await login({
        variables: {
          email,
          password,
        },
      })

      if (!loginErrors) {
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
      }
    } catch (error) {
      console.error('Error registering user:', error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <h1>Register</h1>
        <TextInput
          label="First Name"
          value={firstName}
          onChange={event => setFirstName(event.currentTarget.value)}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChange={event => setLastName(event.currentTarget.value)}
        />
        <TextInput
          label="Username"
          value={username}
          onChange={event => setUsername(event.currentTarget.value)}
        />
        <p>
          Your username will be your unique url: "https://poshare.com/
          {slugify(username)}"
        </p>
        <TextInput
          label="Email"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
        <Button type="submit">register</Button>
      </Stack>
    </form>
  )
}
