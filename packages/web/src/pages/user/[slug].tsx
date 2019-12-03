import { Layout } from '../../components/Layout'
import { withApollo } from '../../lib/apollo'
import { NextPage } from 'next'
import { usePersonBySlugQuery } from '@po-share/queries'
import { Tracklist } from '../../components/Tracklist'
import { Box } from '../../components/Box'
import { Stack } from '../../components/Stack'

const Person: NextPage<{ slug: string }> = ({ slug }) => {
  const { data, loading } = usePersonBySlugQuery({ variables: { slug } })

  const person = data?.personBySlug
  const tracks = person?.tracks?.nodes ?? []

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <Box theme="dark">
            <h1>{person.username}</h1>
          </Box>
          {tracks.length > 0 && (
            <Box theme="accent">
              <Stack space="small">
                <h2>Tracks ({tracks.length} total)</h2>
                <Tracklist tracks={tracks} />
              </Stack>
            </Box>
          )}
        </>
      )}
    </Layout>
  )
}

Person.getInitialProps = async ctx => {
  return { slug: ctx.query.slug as string }
}

export default withApollo(Person)
