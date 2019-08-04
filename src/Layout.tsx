import Header from './Header'
import * as React from 'react'
import Head from 'next/head'
import GlobalStyles from './GlobalStyles'

export default ({
  title = 'po share | a pocket operator community',
  children,
}: LayoutProps) => (
  <>
    <Head>
      <title key="title">{title}</title>
    </Head>
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
  children: React.ReactNode
}
