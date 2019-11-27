import { GET_CURRENT_USER, CurrentPersonQuery } from '@po-share/queries'
import { ApolloClient } from 'apollo-boost'

export const getCurrentUser = (apolloClient: ApolloClient<object>) =>
  apolloClient
    .query<CurrentPersonQuery>({
      query: GET_CURRENT_USER,
    })
    .then(({ data, errors }) => {
      console.log(data)
      return { loggedInUser: data.currentPerson }
    })
    .catch(error => {
      console.error(error)
      // Fail gracefully
      return { loggedInUser: null }
    })
