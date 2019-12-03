import gql from 'graphql-tag'

export const TRACK = gql`
  query track($id: UUID!) {
    track(id: $id) {
      name
      file
      createdAt
      person {
        id
        username
      }
    }
  }
`

export const USER_TRACKS = gql`
  query userTracks($userId: UUID!) {
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

export const SEARCH_TRACKS = gql`
  query searchTracks($term: String) {
    search(search: $term) {
      totalCount
      nodes {
        searchableId
        searchableType
        term
        pretty
      }
    }
  }
`
