import { useState, FormEvent, FormEventHandler } from 'react'
import Layout from '../src/Layout'
import { useAuthenticateMutation } from '@po-share/queries'
import cookie from 'cookie'
import { useApolloClient } from 'react-apollo-hooks'
import redirect from '../src/redirect'

export default () => {
  const client = useApolloClient()
  const [authenticate] = useAuthenticateMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault()

    const { data, errors } = await authenticate({
      variables: {
        email,
        password,
      },
    })

    if (!errors && data) {
      setEmail('')
      setPassword('')

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

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            autoComplete="username"
            onChange={event => setEmail(event.currentTarget.value)}
            name="email"
            value={email}
            type="text"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            autoComplete="current-password"
            name="password"
            value={password}
            placeholder="password"
            type="password"
            onChange={event => setPassword(event.currentTarget.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </Layout>
  )
}
