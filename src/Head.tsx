import * as React from 'react'
import Head from 'next/head'

export default ({ title, description }: HeadProps) => (
  <Head>
    <title key="title">{title}</title>
    <meta name="description" content={description} />
  </Head>
)

declare type HeadProps = {
  title: string
  description: string
}
