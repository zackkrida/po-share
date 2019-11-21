import checkLoggedIn from './checkLoggedIn'
import redirect from './redirect'

// Require that a user us *not* logged in!
export const requireUnauth = (redirectTo = '/') => async (
  context: CustomContext
) => {
  try {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (loggedInUser) {
      // If signed in, send them somewhere more useful
      redirect(context, redirectTo)
    }
    return { loggedInUser }
  } catch (error) {
    console.error(error.message)
    return {}
  }
}
