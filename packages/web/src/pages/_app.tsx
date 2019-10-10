import App from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import withApollo from '../components/withApollo'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props as any
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
