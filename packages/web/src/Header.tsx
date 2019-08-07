import Link from 'next/link'
import { useCurrentPersonQuery, Person } from '@po-share/queries'
import { useApolloClient } from 'react-apollo-hooks'
import { logout } from '../src/logout'

export default ({ user }: { user?: Person }) => {
  const client = useApolloClient()

  return (
    <>
      <header>
        <Link href="/">
          <a>po-share</a>
        </Link>
        <nav>
          <ul>
            {user ? (
              <>
                <li>Hi, {user.firstName}.</li>
                <li
                  style={{ cursor: 'pointer' }}
                  onClick={event => logout(client, '/register')}
                >
                  Logout.
                </li>
              </>
            ) : (
              <Link href="/register">
                <a>Register</a>
              </Link>
            )}
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          padding: 10px;
          background-color: sandybrown;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        nav ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
        }

        nav li {
          padding: 0 10px;
        }
      `}</style>
    </>
  )
}
