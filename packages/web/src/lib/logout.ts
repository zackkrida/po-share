import redirect from './redirect'
import cookie from 'cookie'
import { ApolloClient } from 'apollo-boost'

export const logout = (
  apolloClient: ApolloClient<object>,
  redirectTo: string = '/'
) => {
  document.cookie = cookie.serialize('poToken', '', {
    maxAge: -1, // Expire the cookie immediately
  })

  // Force a reload of all the current queries now that the user is
  // logged in, so we don't accidentally leave any state around.
  apolloClient.clearStore().then(() => {
    // Redirect to a more useful page when signed out
    redirect({}, redirectTo)
  })
}
