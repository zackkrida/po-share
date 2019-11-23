import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'

const SearchPage = () => {
  const router = useRouter()
  const { query } = router.query

  return (
    <Layout>
      <p>You searched for {query}</p>
    </Layout>
  )
}

export default SearchPage
