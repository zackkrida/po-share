import * as React from 'react'
import Layout from '../src/Layout'
import { useAuthenticateMutation } from '@po-share/queries'

export default () => {
  const [authenticate] = useAuthenticateMutation()

  const login = async () => {
    let { data, errors } = await authenticate({
      variables: {
        email: 'zackkrida@protonmail.com',
        password: 'Zackattack79!',
      },
    })

    if (!errors) {
      console.log({ jwt: data.authenticate.jwtToken })
    }
  }

  return (
    <Layout>
      Hello world!
      <button onClick={() => login()}>Log In</button>
    </Layout>
  )
}
