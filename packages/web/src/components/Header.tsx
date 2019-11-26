import '@reach/dialog/styles.css'
import Link from 'next/link'
import { Person } from '@po-share/queries'
import { useState } from 'react'
import { Dialog } from '@reach/dialog'
import { SigninBox } from './SignInBox'
import { RegisterBox } from './RegisterBox'

export default ({ user }: { user?: Pick<Person, 'firstName'> }) => {
  const [loginBox, setSigninBox] = useState<'closed' | 'open'>('closed')
  const [registerBox, setRegisterBox] = useState<'closed' | 'open'>('closed')

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
                {/* <li>
                  <a
                    href="/logout"
                    style={{ cursor: 'pointer' }}
                    onClick={event => {
                      event.preventDefault()
                      logout(apolloClient, '/register')
                    }}
                  >
                    logout?
                  </a>
                </li> */}
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => setRegisterBox('open')}>
                    register
                  </button>
                  <Dialog
                    aria-label="Register for a p.o. share account"
                    isOpen={registerBox === 'open'}
                    onDismiss={() => setRegisterBox('closed')}
                  >
                    <RegisterBox />
                  </Dialog>
                </li>
                <li>
                  <button onClick={() => setSigninBox('open')}>sign in</button>
                  <Dialog
                    aria-label="Sign in to p.o. share with your existing account."
                    isOpen={loginBox === 'open'}
                    onDismiss={() => setSigninBox('closed')}
                  >
                    <SigninBox />
                  </Dialog>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          padding: 1em 1.5em;
          background-color: var(--color-dark-100);
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
          transition: 0.1s ease-in all;
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
