import checkLoggedIn from './checkLoggedIn'
import { NextPageContext } from 'next'
import { ApolloClient } from 'apollo-boost'
import redirect from './redirect'

interface CustomContext extends NextPageContext {
  apolloClient: ApolloClient<object>
}

export default async (context: CustomContext) => {
  try {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (!loggedInUser) {
      // If not signed in, send them somewhere more useful
      redirect(context, '/login')
    }
    return { loggedInUser }
  } catch (error) {
    console.error(error.message)
    return {}
  }
}
