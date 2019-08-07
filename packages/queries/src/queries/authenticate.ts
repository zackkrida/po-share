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

export const REGISTER_USER = gql`
  mutation registerUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    registerPerson(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      person {
        id
        fullName
        firstName
        lastName
        about
        createdAt
        updatedAt
      }
    }
  }
`
