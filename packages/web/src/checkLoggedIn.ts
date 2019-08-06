import { GET_CURRENT_USER, CurrentPersonQuery } from '@po-share/queries'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'

export default (apolloClient: ApolloClient<NormalizedCacheObject>) =>
  apolloClient
    .query<CurrentPersonQuery>({
      query: GET_CURRENT_USER,
    })
    .then(({ data, errors }) => {
      console.log({ data, errors })
      return { loggedInUser: data.currentPerson }
    })
    .catch(error => {
      console.error(error)
      // Fail gracefully
      return { loggedInUser: null }
    })
