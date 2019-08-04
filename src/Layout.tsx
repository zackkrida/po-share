import Header from './Header'
import GlobalStyles from './GlobalStyles'
import Head from './Head'

export default ({
  title = 'po share | a pocket operator community',
  description = "a fan community for patches, tracks, and other content for teenage engineering's pocket operators",
  children,
}: LayoutProps) => (
  <>
    <Head title={title} description={description} />
    <Header />
    <GlobalStyles />
    <main>{children}</main>
    <style jsx>{`
      main {
        padding: 10px;
      }
    `}</style>
  </>
)

declare type LayoutProps = {
  /** The meta title of the page */
  title?: string
  description?: string
  children: React.ReactNode
}
