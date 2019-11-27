import { Layout } from '../../components/Layout'
import { useTrackQuery } from '@po-share/queries'
import { withApollo } from '../../lib/apollo'
import { NextPage } from 'next'
import Link from 'next/link'
import { Box } from '../../components/Box'
import { Stack } from '../../components/Stack'

const Track: NextPage<{ id: number }> = ({ id }) => {
  const { data, loading } = useTrackQuery({ variables: { id } })

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {!loading && (
        <Box>
          <Stack space="small">
            <h1>{data.track.name}</h1>
            <p>
              Uploaded by:{' '}
              <Link href={`/user/${data.track.person.id}`}>
                <a>{data.track.person.username}</a>
              </Link>
            </p>
          </Stack>
        </Box>
      )}
    </Layout>
  )
}

Track.getInitialProps = async ctx => {
  return { id: parseInt(ctx.query.id as string) }
}

export default withApollo(Track)
