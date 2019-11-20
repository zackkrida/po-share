import * as React from 'react'
import { Person, useUserTracksQuery, Track } from '@po-share/queries'
import { humanTime } from '../lib/timestamp'

/**
 * Display a list of tracks for a particular user
 */
const UserTracks = ({ id }: { id: Person['id'] }) => {
  const { data, loading, error } = useUserTracksQuery({
    variables: { userId: id },
  })
  if (error) return <div>Error loading user tracks.</div>
  if (loading) return <div>Loading...</div>
  console.log({ data })
  return (
    <ul>
      {data.tracks.nodes.map(track => (
        <TrackListItem key={track.id} track={track} />
      ))}
    </ul>
  )
}

const TrackListItem = ({ track }: { track: Track }) => {
  return (
    <li>
      {track.image && (
        <img src={track.image} alt={`Artwork for ${track.name}`} />
      )}
      Name: {track.name} Visibility: {track.public ? 'Public' : 'Private'}{' '}
      Created: {humanTime(track.createdAt)}
    </li>
  )
}

export default UserTracks
