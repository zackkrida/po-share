import { Layout } from './Layout'
import {
  useRegisterUserMutation,
  useAuthenticateMutation,
} from '@po-share/queries'
import cookie from 'cookie'
import redirect from '../lib/redirect'
import { useState, EventHandler, FormEvent } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { requireUnauth } from '../lib/requireUnauth'
import { withApollo } from '../lib/apollo'
import { Stack } from './Stack'
import { Button } from './Button'
import { TextInput } from './TextInput'

export const RegisterBox = () => {
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const [register] = useRegisterUserMutation()
  const [login] = useAuthenticateMutation()
  const client = useApolloClient()

  const handleSubmit: EventHandler<FormEvent> = async event => {
    event.preventDefault()
    event.stopPropagation()

    const { errors } = await register({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    })

    if (!errors) {
      const { data, errors } = await login({
        variables: {
          email,
          password,
        },
      })

      if (!errors) {
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
