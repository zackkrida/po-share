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
`;
