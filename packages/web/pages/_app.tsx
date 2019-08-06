import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import withApollo from '../src/withApollo'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props as any
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
