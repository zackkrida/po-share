import { Person } from '@po-share/queries'
import { Layout } from '../src/Layout'
import requireAuth from '../src/requireAuth'
import UserTracks from '../src/UserTracks'

const HomePage = ({ loggedInUser }: { loggedInUser: Person }) => {
  console.log({ loggedInUser })
  return (
    <Layout user={loggedInUser}>
      <h1>Welcome, you are logged in.</h1>

      <h2>User tracks:</h2>
      <UserTracks id={loggedInUser.id} />
    </Layout>
  )
}

// This page requires user authentication
HomePage.getInitialProps = requireAuth
export default HomePage
