import { Layout } from '../components/Layout'
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
import { Stack } from '../components/Stack'

const RegisterPage = () => {
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
    <Layout title="Sign up now to get started | po-share">
      <h1>Register for po-share.com!</h1>

      <div style={{ border: '1px solid red' }}>
        <Stack space="large">
          <p>WOW</p>
          <div>AWESOME</div>
          <ul>
            <li>WOW</li>
            <li>WOW</li>
          </ul>
        </Stack>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.currentTarget.value)}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.currentTarget.value)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
        <br />
        <button>register</button>
      </form>
    </Layout>
  )
}

RegisterPage.getInitialProps = requireUnauth('/dashboard')

export default withApollo(RegisterPage)
