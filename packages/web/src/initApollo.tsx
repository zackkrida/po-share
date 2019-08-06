import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'

let apolloClient: any = null

// Polyfill fetch() on the server (used by apollo-client)
if (typeof window === 'undefined') {
  ;(global as any).fetch = fetch
}

function create(
  initialState: any,
  { getGraphqlUri, getToken, fetchOptions }: any
) {
  const httpLink = createHttpLink({
    uri: getGraphqlUri(),
    fetchOptions,
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()

    const allHeaders = {
      ...headers,
    }
    if (token) {
      allHeaders.authorization = `Bearer ${token}`
    }

    return {
      headers: allHeaders,
    }
  })

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState: any, options: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    let fetchOptions = {}
    // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
    // 'https-proxy-agent' is required here because it's a sever-side only module
    if (process.env.https_proxy) {
      fetchOptions = {
        agent: new (require('https-proxy-agent'))(process.env.https_proxy),
      }
    }
    return create(initialState, {
      ...options,
      fetchOptions,
    })
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
