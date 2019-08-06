import { useState, FormEvent, FormEventHandler } from 'react'
import Layout from '../src/Layout'
import { useAuthenticateMutation } from '@po-share/queries'

export default () => {
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
      console.log({ jwt: data.authenticate.jwtToken })
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
