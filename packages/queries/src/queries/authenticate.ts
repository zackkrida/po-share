import gql from 'graphql-tag'

export const AUTHENTICATE = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(input: { email: $email, password: $password }) {
      jwtToken
    }
  }
`

export const GET_CURRENT_USER = gql`
  query currentPerson {
    currentPerson {
      fullName
      firstName
      lastName
      about
      createdAt
      updatedAt
    }
  }
`
