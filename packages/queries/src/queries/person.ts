import gql from 'graphql-tag'

export const PERSON = gql`
  query person($id: Int!) {
    person(id: $id) {
      id
      fullName
      username
      tracks {
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
  }
`
