import { Layout } from '../../components/Layout'
import { withApollo } from '../../lib/apollo'
import { NextPage } from 'next'
import { usePersonQuery } from '@po-share/queries'
import { Tracklist } from '../../components/Tracklist'
import { Box } from '../../components/Box'
import { Stack } from '../../components/Stack'

const Person: NextPage<{ id: number }> = ({ id }) => {
  const { data, loading } = usePersonQuery({ variables: { id } })

  const person = data?.person
  const tracks = person?.tracks?.nodes ?? []

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <Box theme="dark">
            <h1>{person.fullName}</h1>
            <p>Username: {person.username}</p>
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
  return { id: parseInt(ctx.query.id as string) }
}

export default withApollo(Person)
