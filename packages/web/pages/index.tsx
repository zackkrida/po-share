import requireAuth from '../src/requireAuth'
import { Layout } from '../src/Layout'
import { Person } from '@po-share/queries'

const HomePage = ({ loggedInUser }: { loggedInUser: Person }) => (
  <Layout user={loggedInUser}>Welcome, you are logged in!</Layout>
)

// This page requires user authentication
HomePage.getInitialProps = requireAuth
export default HomePage
