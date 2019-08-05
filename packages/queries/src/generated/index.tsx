import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any;
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  password: Scalars["String"];
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  __typename?: "AuthenticatePayload";
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  jwtToken?: Maybe<Scalars["JwtToken"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePersonByNodeId?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `PersonAccount` using its globally unique id and a patch. */
  updatePersonAccountByNodeId?: Maybe<UpdatePersonAccountPayload>;
  /** Updates a single `PersonAccount` using a unique key and a patch. */
  updatePersonAccount?: Maybe<UpdatePersonAccountPayload>;
  /** Updates a single `PersonAccount` using a unique key and a patch. */
  updatePersonAccountByEmail?: Maybe<UpdatePersonAccountPayload>;
  /** Creates a JWT token that will securely identify a person and give them certain permissions. */
  authenticate?: Maybe<AuthenticatePayload>;
  /** Registers a single user and creates an account in our app. */
  registerPerson?: Maybe<RegisterPersonPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByNodeIdArgs = {
  input: UpdatePersonByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonAccountByNodeIdArgs = {
  input: UpdatePersonAccountByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonAccountArgs = {
  input: UpdatePersonAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonAccountByEmailArgs = {
  input: UpdatePersonAccountByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterPersonArgs = {
  input: RegisterPersonInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]>;
};

/** A connection to a list of `Person` values. */
export type PeopleConnection = {
  __typename?: "PeopleConnection";
  /** A list of `Person` objects. */
  nodes: Array<Maybe<Person>>;
  /** A list of edges which contains the `Person` and cursor to aid in pagination. */
  edges: Array<PeopleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Person` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `Person` edge in the connection. */
export type PeopleEdge = {
  __typename?: "PeopleEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Person` at the end of the edge. */
  node?: Maybe<Person>;
};

/** Methods to use when ordering `Person`. */
export enum PeopleOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  AboutAsc = "ABOUT_ASC",
  AboutDesc = "ABOUT_DESC",
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  UpdatedAtAsc = "UPDATED_AT_ASC",
  UpdatedAtDesc = "UPDATED_AT_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}

export type Person = Node & {
  __typename?: "Person";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** The primary unique identifier for the person. */
  id: Scalars["Int"];
  /** The person’s first name. */
  firstName: Scalars["String"];
  /** The person’s last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** A short description about the user, written by the user. */
  about?: Maybe<Scalars["String"]>;
  /** The time this person was created. */
  createdAt?: Maybe<Scalars["Datetime"]>;
  updatedAt?: Maybe<Scalars["Datetime"]>;
  /** Reads a single `PersonAccount` that is related to this `Person`. */
  personAccountByPersonId?: Maybe<PersonAccount>;
  /** Reads and enables pagination through a set of `PersonAccount`. */
  personAccounts: PersonAccountsConnection;
  /** A person’s full name which is a concatenation of their first and last name. */
  fullName?: Maybe<Scalars["String"]>;
};

export type PersonPersonAccountsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
  condition?: Maybe<PersonAccountCondition>;
};

export type PersonAccount = Node & {
  __typename?: "PersonAccount";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** The id of the person associated with this account. */
  personId: Scalars["Int"];
  /** The email address of the person. */
  email: Scalars["String"];
  /** An opaque hash of the person’s password. */
  passwordHash: Scalars["String"];
  /** Reads a single `Person` that is related to this `PersonAccount`. */
  person?: Maybe<Person>;
};

/** A condition to be used against `PersonAccount` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PersonAccountCondition = {
  /** Checks for equality with the object’s `personId` field. */
  personId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `passwordHash` field. */
  passwordHash?: Maybe<Scalars["String"]>;
};

/** Represents an update to a `PersonAccount`. Fields that are set will be updated. */
export type PersonAccountPatch = {
  /** The id of the person associated with this account. */
  personId?: Maybe<Scalars["Int"]>;
  /** The email address of the person. */
  email?: Maybe<Scalars["String"]>;
  /** An opaque hash of the person’s password. */
  passwordHash?: Maybe<Scalars["String"]>;
};

/** A connection to a list of `PersonAccount` values. */
export type PersonAccountsConnection = {
  __typename?: "PersonAccountsConnection";
  /** A list of `PersonAccount` objects. */
  nodes: Array<Maybe<PersonAccount>>;
  /** A list of edges which contains the `PersonAccount` and cursor to aid in pagination. */
  edges: Array<PersonAccountsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PersonAccount` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `PersonAccount` edge in the connection. */
export type PersonAccountsEdge = {
  __typename?: "PersonAccountsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `PersonAccount` at the end of the edge. */
  node?: Maybe<PersonAccount>;
};

/** Methods to use when ordering `PersonAccount`. */
export enum PersonAccountsOrderBy {
  Natural = "NATURAL",
  PersonIdAsc = "PERSON_ID_ASC",
  PersonIdDesc = "PERSON_ID_DESC",
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  PasswordHashAsc = "PASSWORD_HASH_ASC",
  PasswordHashDesc = "PASSWORD_HASH_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}

/** A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PersonCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `about` field. */
  about?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars["Datetime"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars["Datetime"]>;
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The primary unique identifier for the person. */
  id?: Maybe<Scalars["Int"]>;
  /** The person’s first name. */
  firstName?: Maybe<Scalars["String"]>;
  /** The person’s last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** A short description about the user, written by the user. */
  about?: Maybe<Scalars["String"]>;
  /** The time this person was created. */
  createdAt?: Maybe<Scalars["Datetime"]>;
  updatedAt?: Maybe<Scalars["Datetime"]>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: "Query";
  /** Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Person`. */
  people?: Maybe<PeopleConnection>;
  /** Reads and enables pagination through a set of `PersonAccount`. */
  personAccounts?: Maybe<PersonAccountsConnection>;
  person?: Maybe<Person>;
  personAccount?: Maybe<PersonAccount>;
  personAccountByEmail?: Maybe<PersonAccount>;
  /** Gets the person who was identified by our JWT. */
  currentPerson?: Maybe<Person>;
  /** Reads a single `Person` using its globally unique `ID`. */
  personByNodeId?: Maybe<Person>;
  /** Reads a single `PersonAccount` using its globally unique `ID`. */
  personAccountByNodeId?: Maybe<PersonAccount>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPeopleArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PeopleOrderBy>>;
  condition?: Maybe<PersonCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
  condition?: Maybe<PersonAccountCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountArgs = {
  personId: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountByEmailArgs = {
  email: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPersonByNodeIdArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountByNodeIdArgs = {
  nodeId: Scalars["ID"];
};

/** All input for the `registerPerson` mutation. */
export type RegisterPersonInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

/** The output of our `registerPerson` mutation. */
export type RegisterPersonPayload = {
  __typename?: "RegisterPersonPayload";
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  person?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
};

/** The output of our `registerPerson` mutation. */
export type RegisterPersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>;
};

/** All input for the `updatePersonAccountByEmail` mutation. */
export type UpdatePersonAccountByEmailInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `PersonAccount` being updated. */
  patch: PersonAccountPatch;
  /** The email address of the person. */
  email: Scalars["String"];
};

/** All input for the `updatePersonAccountByNodeId` mutation. */
export type UpdatePersonAccountByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `PersonAccount` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `PersonAccount` being updated. */
  patch: PersonAccountPatch;
};

/** All input for the `updatePersonAccount` mutation. */
export type UpdatePersonAccountInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `PersonAccount` being updated. */
  patch: PersonAccountPatch;
  /** The id of the person associated with this account. */
  personId: Scalars["Int"];
};

/** The output of our update `PersonAccount` mutation. */
export type UpdatePersonAccountPayload = {
  __typename?: "UpdatePersonAccountPayload";
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `PersonAccount` that was updated by this mutation. */
  personAccount?: Maybe<PersonAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `PersonAccount`. */
  person?: Maybe<Person>;
  /** An edge for our `PersonAccount`. May be used by Relay 1. */
  personAccountEdge?: Maybe<PersonAccountsEdge>;
};

/** The output of our update `PersonAccount` mutation. */
export type UpdatePersonAccountPayloadPersonAccountEdgeArgs = {
  orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
};

/** All input for the `updatePersonByNodeId` mutation. */
export type UpdatePersonByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Person` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch;
};

/** All input for the `updatePerson` mutation. */
export type UpdatePersonInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch;
  /** The primary unique identifier for the person. */
  id: Scalars["Int"];
};

/** The output of our update `Person` mutation. */
export type UpdatePersonPayload = {
  __typename?: "UpdatePersonPayload";
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Person` that was updated by this mutation. */
  person?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
};

/** The output of our update `Person` mutation. */
export type UpdatePersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>;
};
export type AuthenticateMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type AuthenticateMutation = { __typename?: "Mutation" } & {
  authenticate: Maybe<
    { __typename?: "AuthenticatePayload" } & Pick<
      AuthenticatePayload,
      "jwtToken"
    >
  >;
};

export const AuthenticateDocument = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(input: { email: $email, password: $password }) {
      jwtToken
    }
  }
`;
export type AuthenticateMutationFn = ReactApollo.MutationFn<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export type AuthenticateComponentProps = Omit<
  ReactApollo.MutationProps<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >,
  "mutation"
>;

export const AuthenticateComponent = (props: AuthenticateComponentProps) => (
  <ReactApollo.Mutation<AuthenticateMutation, AuthenticateMutationVariables>
    mutation={AuthenticateDocument}
    {...props}
  />
);

export function useAuthenticateMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >(AuthenticateDocument, baseOptions);
}
export type AuthenticateMutationHookResult = ReturnType<
  typeof useAuthenticateMutation
>;
