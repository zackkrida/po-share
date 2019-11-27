import { getCurrentUser } from './getCurrentUser'
import redirect from './redirect'

/**
 * Require that a user is logged in
 */
export default async (context: CustomContext) => {
  try {
    const { loggedInUser } = await getCurrentUser(context.apolloClient)

    console.log({ loggedInUser })

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
