import { GET_CURRENT_USER, CurrentPersonQuery } from '@po-share/queries'
import { ApolloClient } from 'apollo-boost'

export default (apolloClient: ApolloClient<object>) =>
  apolloClient
    .query<CurrentPersonQuery>({
      query: GET_CURRENT_USER,
    })
    .then(({ data, errors }) => {
      return { loggedInUser: data.currentPerson }
    })
    .catch(error => {
      console.error(error)
      // Fail gracefully
      return { loggedInUser: null }
    })
