import gql from 'graphql-tag'

export const USER_TRACKS = gql`
  query userTracks($userId: Int!) {
    tracks(condition: { personId: $userId }) {
      totalCount
      nodes {
        id
        name
        image
        file
        public
        createdAt
        updatedAt
        publishedAt
        updatedAt
        deletedAt
      }
    }
  }
`
