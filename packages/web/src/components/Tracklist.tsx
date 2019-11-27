import { Track, TrackSearch, useUserTracksQuery } from '@po-share/queries'
import { Box } from './Box'
import Link from 'next/link'

export const Tracklist = ({ tracks }: { tracks: Track[] }) => (
  <>
    {tracks.map(track => (
      <Box
        spaceX="small"
        spaceY="small"
        theme="light"
        key={track.id}
        styleOnInteraction={true}
      >
        <audio src="/audio/test-audio.mp3" controls={true} />
        <Link href={`/track/${track.id}`}>
          <a>Name: {track.name}</a>
        </Link>
      </Box>
    ))}
  </>
)

export const TrackSearchList = ({ tracks }: { tracks: TrackSearch[] }) => (
  <>
    {tracks.map(track => (
      <Box
        spaceX="small"
        spaceY="small"
        theme="light"
        key={track.searchableId}
        styleOnInteraction={true}
      >
        <audio src="/audio/test-audio.mp3" controls={true} />
        <Link href={`/track/${track.searchableId}`}>
          <a>Name: {track.pretty}</a>
        </Link>
      </Box>
    ))}
  </>
)
