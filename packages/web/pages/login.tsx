import { Person, useAuthenticateMutation } from '@po-share/queries'
import cookie from 'cookie'
import { FormEventHandler, useState } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { Layout } from '../src/Layout'
import redirect from '../src/redirect'
import requireNoAuth from '../src/requireNoAuth'

const LoginPage = ({ loggedInUser }: { loggedInUser: Person }) => {
  const client = useApolloClient()
  const [authenticate] = useAuthenticateMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault()
    // Clear existing errors
    if (error) setError('')

    const { data, errors } = await authenticate({
      variables: {
        email,
        password,
      },
    })

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
  }

  return (
    <Layout title="Log in | po-share">
      <h1>Log in to po-share.com!</h1>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
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

LoginPage.getInitialProps = requireNoAuth

export default LoginPage
