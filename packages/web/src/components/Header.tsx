import Link from 'next/link'
import { useCurrentPersonQuery, Person } from '@po-share/queries'
import { useApolloClient } from 'react-apollo-hooks'
import { logout } from '../components/logout'

export default ({ user }: { user?: Person }) => {
  const client = useApolloClient()

  return (
    <>
      <header>
        <section>
          <Link href="/">
            <a className="title">po-share</a>
          </Link>
          <h1 className="tagline">
            a fan community for teenage engineering's{' '}
            <a href="https://teenage.engineering/products/po?utm_source=po-share&utm_medium=website&utm_campaign=referral">
              pocket operators.
            </a>
          </h1>
        </section>
        <nav>
          <ul>
            {user ? (
              <>
                <li>hi&nbsp;{user.firstName.toLowerCase()}.</li>
                <li>
                  <a
                    href="/logout"
                    style={{ cursor: 'pointer' }}
                    onClick={event => {
                      event.preventDefault()
                      logout(client, '/register')
                    }}
                  >
                    logout?
                  </a>
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
          padding: 1em 1.5em;
          background-color: #141618;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #f8f8f8;
        }

        section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-weight: bold;
        }

        .tagline {
          font-size: inherit;
          margin-left: 1em;
          font-weight: inherit;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: 0.2s ease-in all;
        }

        a:hover,
        a:focus {
          color: #5668b0;
        }

        nav ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
        }

        nav li {
          padding: 0 0.5em;
        }
      `}</style>
    </>
  )
}
