"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.AUTHENTICATE = graphql_tag_1.default `
  mutation authenticate($email: String!, $password: String!) {
    authenticate(input: { email: $email, password: $password }) {
      jwtToken
    }
  }
`;
exports.GET_CURRENT_USER = graphql_tag_1.default `
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
`;
exports.REGISTER_USER = graphql_tag_1.default `
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
`;
