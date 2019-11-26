import Header from './Header'
import { Person } from '@po-share/queries'
import GlobalStyles from './GlobalStyles'
import Head from './Head'
import { Box } from './Box'

export const Layout = ({
  user = null,
  title = 'po share | a pocket operator community',
  description = "a fan community for patches, tracks, and other content for teenage engineering's pocket operators",
  children,
}: LayoutProps) => (
  <>
    <Head title={title} description={description} />
    <Header user={user} />
    <GlobalStyles />
    <main>{children}</main>
    <footer>
      <Box theme="dark">
        <h2>Footer</h2>
        <ul>
          <li>Things go here.</li>
          <li>Yes, they do.</li>
        </ul>
      </Box>
    </footer>
  </>
)

export declare type LayoutProps = {
  /** The meta title of the page */
  title?: string
  /** The currently loggged-in user */
  user?: Pick<Person, 'firstName'> | null
  /** The meta description of the page */
  description?: string
  /** The content of the page */
  children: React.ReactNode
}
