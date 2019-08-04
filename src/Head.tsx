import * as React from 'react'
import Head from 'next/head'

export default ({ title, description }: HeadProps) => (
  <Head>
    <title key="title">{title}</title>
    <meta name="description" content={description} />
  </Head>
)

declare type HeadProps = {
  /** The meta title of the page */
  title: string
  /** The meta description of the page */
  description: string
}
