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
      id
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
  mutation registerUser($input: RegisterPersonInput!) {
    registerPerson(input: $input) {
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
