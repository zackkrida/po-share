import { NextPage } from 'next'
import { Layout } from '../../components/Layout'

const SearchPage: NextPage<SearchPageProps> = ({ query }) => {
  return (
    <Layout>
      <p>You searched for {query}</p>
    </Layout>
  )
}

SearchPage.getInitialProps = async ctx => {
  return { query: ctx.query.query as string }
}

interface SearchPageProps {
  query: string
}

export default SearchPage
