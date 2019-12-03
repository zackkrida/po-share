import gql from 'graphql-tag'

export const PERSON_BY_USERNAME = gql`
  query personByUsername($username: String!) {
    personByUsername(username: $username) {
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

export const PERSON_BY_SLUG = gql`
  query personBySlug($slug: String!) {
    personBySlug(slug: $slug) {
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
