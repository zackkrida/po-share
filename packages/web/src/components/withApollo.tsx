import React from 'react'
import cookie from 'cookie'
import { getMarkupFromTree } from 'react-apollo-hooks'
import { renderToString } from 'react-dom/server'
import Head from 'next/head'

import initApollo from './initApollo'

// Isomorphic cookie function :)
const parseCookies = (req: any = {}, options = {}) =>
  cookie.parse(
    req.headers ? req.headers.cookie || '' : document.cookie,
    options
  )

export default (App: any) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`

    apolloClient: any

    static async getInitialProps(ctx: any) {
      let graphqlURI: string
      if (ctx.req && ctx.req.headers['x-forwarded-proto']) {
        if (ctx.req.headers['x-now-deployment-url']) {
          graphqlURI = `${ctx.req.headers['x-forwarded-proto']}://${ctx.req.headers['x-now-deployment-url']}/_/graphql`
        } else {
          graphqlURI = `${ctx.req.headers['x-forwarded-proto']}://${ctx.req.headers['x-forwarded-host']}/_/graphql`
        }
      } else {
        graphqlURI = 'http://localhost:3000/graphql'
      }

      const {
        AppTree,
        ctx: { req, res },
      } = ctx
      const apollo = initApollo(
        {},
        {
          getGraphqlUri: () => graphqlURI,
          getToken: () => parseCookies(req).poToken,
        }
      )

      ctx.ctx.apolloClient = apollo

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {}
      }

      if (typeof window === 'undefined') {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: <AppTree {...appProps} apolloClient={apollo} />,
          })
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props: any) {
      super(props)
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getGraphqlUri: () => '/graphql',
        getToken: () => {
          return parseCookies({}).poToken
        },
      })
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
