import { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { Box } from '../../components/Box'
import { withApollo } from '../../lib/apollo'
import { useSearchTracksQuery } from '@po-share/queries'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { Stack } from '../../components/Stack'
import { TrackSearchList } from '../../components/Tracklist'

const SearchPage: NextPage<SearchPageProps> = ({ query }) => {
  const [searchTerm, setSearchTerm] = useState(query)
  const { data, loading, refetch, error } = useSearchTracksQuery({
    variables: { term: query },
  })
  const resultCount = data?.search?.totalCount ?? 0
  const results = data?.search?.nodes ?? []

  return (
    <Layout>
      <Box>
        <h1>
          Search results for &ldquo;{query}&rdquo; (Showing {resultCount}{' '}
          results)
        </h1>

        <form
          action=""
          onSubmit={event => {
            event.preventDefault()
            if (!searchTerm || searchTerm === query) return // If no search term or search term matches previous search term
            console.log('refetching search results')
            window.history.pushState(
              {},
              `po-share | Search results for "${searchTerm}"`,
              `/search/${searchTerm}`
            )
            refetch({ term: searchTerm })
          }}
        >
          <TextInput
            label="Search"
            value={searchTerm}
            onChange={event => setSearchTerm(event.currentTarget.value)}
            placeholder="Search for anything, like 'techno beats, or sample'"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
      <Box spaceX={'large'} spaceY={'medium'} theme={'accent'}>
        {loading && <div>Loading...</div>}
        {!loading && results.length > 0 ? (
          <Stack space="small">
            <TrackSearchList tracks={results} />
          </Stack>
        ) : (
          <div>No results for "{searchTerm}".</div>
        )}
      </Box>
    </Layout>
  )
}

SearchPage.getInitialProps = async ctx => {
  return { query: ctx.query.query as string }
}

interface SearchPageProps {
  query: string
}

export default withApollo(SearchPage)
