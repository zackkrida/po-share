import Header from './Header'
import { Person } from '@po-share/queries'
import GlobalStyles from './GlobalStyles'
import Head from './Head'

export const Layout = ({
  user,
  title = 'po share | a pocket operator community',
  description = "a fan community for patches, tracks, and other content for teenage engineering's pocket operators",
  children,
}: LayoutProps) => (
  <>
    <Head title={title} description={description} />
    <Header user={user} />
    <GlobalStyles />
    <main>{children}</main>
    <style jsx>{`
      main {
        padding: 10px;
      }
    `}</style>
  </>
)

export declare type LayoutProps = {
  /** The meta title of the page */
  title?: string
  /** The currently loggged-in user */
  user?: Person
  /** The meta description of the page */
  description?: string
  /** The content of the page */
  children: React.ReactNode
}
