import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  /** 
 * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 **/
  Datetime: any,
  /** 
 * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
 **/
  JwtToken: any,
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String'],
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
   __typename?: 'AuthenticatePayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  jwtToken?: Maybe<Scalars['JwtToken']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
};

/** All input for the create `Track` mutation. */
export type CreateTrackInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Track` to be created by this mutation. */
  track: TrackInput,
};

/** The output of our create `Track` mutation. */
export type CreateTrackPayload = {
   __typename?: 'CreateTrackPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Track` that was created by this mutation. */
  track?: Maybe<Track>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Person` that is related to this `Track`. */
  person?: Maybe<Person>,
  /** An edge for our `Track`. May be used by Relay 1. */
  trackEdge?: Maybe<TracksEdge>,
};


/** The output of our create `Track` mutation. */
export type CreateTrackPayloadTrackEdgeArgs = {
  orderBy?: Maybe<Array<TracksOrderBy>>
};




/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation',
  /** Creates a single `Track`. */
  createTrack?: Maybe<CreateTrackPayload>,
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePersonByNodeId?: Maybe<UpdatePersonPayload>,
  /** Updates a single `Person` using a unique key and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>,
  /** Updates a single `Person` using a unique key and a patch. */
  updatePersonByUsername?: Maybe<UpdatePersonPayload>,
  /** Updates a single `Track` using its globally unique id and a patch. */
  updateTrackByNodeId?: Maybe<UpdateTrackPayload>,
  /** Updates a single `Track` using a unique key and a patch. */
  updateTrack?: Maybe<UpdateTrackPayload>,
  /** Updates a single `PersonAccount` using its globally unique id and a patch. */
  updatePersonAccountByNodeId?: Maybe<UpdatePersonAccountPayload>,
  /** Updates a single `PersonAccount` using a unique key and a patch. */
  updatePersonAccount?: Maybe<UpdatePersonAccountPayload>,
  /** Updates a single `PersonAccount` using a unique key and a patch. */
  updatePersonAccountByEmail?: Maybe<UpdatePersonAccountPayload>,
  /** Creates a JWT token that will securely identify a person and give them certain permissions. */
  authenticate?: Maybe<AuthenticatePayload>,
  /** Registers a single user and creates an account in our app. */
  registerPerson?: Maybe<RegisterPersonPayload>,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTrackArgs = {
  input: CreateTrackInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByNodeIdArgs = {
  input: UpdatePersonByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByUsernameArgs = {
  input: UpdatePersonByUsernameInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrackByNodeIdArgs = {
  input: UpdateTrackByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrackArgs = {
  input: UpdateTrackInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonAccountByNodeIdArgs = {
  input: UpdatePersonAccountByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonAccountArgs = {
  input: UpdatePersonAccountInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonAccountByEmailArgs = {
  input: UpdatePersonAccountByEmailInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterPersonArgs = {
  input: RegisterPersonInput
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>,
};

/** A connection to a list of `Person` values. */
export type PeopleConnection = {
   __typename?: 'PeopleConnection',
  /** A list of `Person` objects. */
  nodes: Array<Maybe<Person>>,
  /** A list of edges which contains the `Person` and cursor to aid in pagination. */
  edges: Array<PeopleEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Person` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Person` edge in the connection. */
export type PeopleEdge = {
   __typename?: 'PeopleEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Person` at the end of the edge. */
  node?: Maybe<Person>,
};

/** Methods to use when ordering `Person`. */
export enum PeopleOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  AboutAsc = 'ABOUT_ASC',
  AboutDesc = 'ABOUT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Person = Node & {
   __typename?: 'Person',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  /** The primary unique identifier for the person. */
  id: Scalars['Int'],
  /** The person’s first name. */
  firstName: Scalars['String'],
  /** The person’s last name. */
  lastName?: Maybe<Scalars['String']>,
  /** A short description about the user, written by the user. */
  about?: Maybe<Scalars['String']>,
  /** The time this person was created. */
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  username?: Maybe<Scalars['String']>,
  /** Reads a single `PersonAccount` that is related to this `Person`. */
  personAccountByPersonId?: Maybe<PersonAccount>,
  /** Reads and enables pagination through a set of `PersonAccount`. */
  personAccounts: PersonAccountsConnection,
  /** Reads and enables pagination through a set of `Track`. */
  tracks: TracksConnection,
  /** A person’s full name which is a concatenation of their first and last name. */
  fullName?: Maybe<Scalars['String']>,
};


export type PersonPersonAccountsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PersonAccountsOrderBy>>,
  condition?: Maybe<PersonAccountCondition>
};


export type PersonTracksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TracksOrderBy>>,
  condition?: Maybe<TrackCondition>
};

export type PersonAccount = Node & {
   __typename?: 'PersonAccount',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  /** The id of the person associated with this account. */
  personId: Scalars['Int'],
  /** The email address of the person. */
  email: Scalars['String'],
  /** An opaque hash of the person’s password. */
  passwordHash: Scalars['String'],
  /** Reads a single `Person` that is related to this `PersonAccount`. */
  person?: Maybe<Person>,
};

/** 
 * A condition to be used against `PersonAccount` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 **/
export type PersonAccountCondition = {
  /** Checks for equality with the object’s `personId` field. */
  personId?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `passwordHash` field. */
  passwordHash?: Maybe<Scalars['String']>,
};

/** Represents an update to a `PersonAccount`. Fields that are set will be updated. */
export type PersonAccountPatch = {
  /** The id of the person associated with this account. */
  personId?: Maybe<Scalars['Int']>,
  /** The email address of the person. */
  email?: Maybe<Scalars['String']>,
  /** An opaque hash of the person’s password. */
  passwordHash?: Maybe<Scalars['String']>,
};

/** A connection to a list of `PersonAccount` values. */
export type PersonAccountsConnection = {
   __typename?: 'PersonAccountsConnection',
  /** A list of `PersonAccount` objects. */
  nodes: Array<Maybe<PersonAccount>>,
  /** A list of edges which contains the `PersonAccount` and cursor to aid in pagination. */
  edges: Array<PersonAccountsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `PersonAccount` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `PersonAccount` edge in the connection. */
export type PersonAccountsEdge = {
   __typename?: 'PersonAccountsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `PersonAccount` at the end of the edge. */
  node?: Maybe<PersonAccount>,
};

/** Methods to use when ordering `PersonAccount`. */
export enum PersonAccountsOrderBy {
  Natural = 'NATURAL',
  PersonIdAsc = 'PERSON_ID_ASC',
  PersonIdDesc = 'PERSON_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PasswordHashAsc = 'PASSWORD_HASH_ASC',
  PasswordHashDesc = 'PASSWORD_HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PersonCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `about` field. */
  about?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>,
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  /** The primary unique identifier for the person. */
  id?: Maybe<Scalars['Int']>,
  /** The person’s first name. */
  firstName?: Maybe<Scalars['String']>,
  /** The person’s last name. */
  lastName?: Maybe<Scalars['String']>,
  /** A short description about the user, written by the user. */
  about?: Maybe<Scalars['String']>,
  /** The time this person was created. */
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  username?: Maybe<Scalars['String']>,
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query',
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 **/
  query: Query,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'],
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>,
  /** Reads and enables pagination through a set of `Person`. */
  people?: Maybe<PeopleConnection>,
  /** Reads and enables pagination through a set of `Track`. */
  tracks?: Maybe<TracksConnection>,
  /** Reads and enables pagination through a set of `PersonAccount`. */
  personAccounts?: Maybe<PersonAccountsConnection>,
  person?: Maybe<Person>,
  personByUsername?: Maybe<Person>,
  track?: Maybe<Track>,
  personAccount?: Maybe<PersonAccount>,
  personAccountByEmail?: Maybe<PersonAccount>,
  /** Gets the person who was identified by our JWT. */
  currentPerson?: Maybe<Person>,
  /** Reads a single `Person` using its globally unique `ID`. */
  personByNodeId?: Maybe<Person>,
  /** Reads a single `Track` using its globally unique `ID`. */
  trackByNodeId?: Maybe<Track>,
  /** Reads a single `PersonAccount` using its globally unique `ID`. */
  personAccountByNodeId?: Maybe<PersonAccount>,
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryPeopleArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PeopleOrderBy>>,
  condition?: Maybe<PersonCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryTracksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TracksOrderBy>>,
  condition?: Maybe<TrackCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PersonAccountsOrderBy>>,
  condition?: Maybe<PersonAccountCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByUsernameArgs = {
  username: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountArgs = {
  personId: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountByEmailArgs = {
  email: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonAccountByNodeIdArgs = {
  nodeId: Scalars['ID']
};

/** All input for the `registerPerson` mutation. */
export type RegisterPersonInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

/** The output of our `registerPerson` mutation. */
export type RegisterPersonPayload = {
   __typename?: 'RegisterPersonPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  person?: Maybe<Person>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>,
};


/** The output of our `registerPerson` mutation. */
export type RegisterPersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>
};

export type Track = Node & {
   __typename?: 'Track',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  personId?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  file?: Maybe<Scalars['String']>,
  public?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  publishedAt?: Maybe<Scalars['Datetime']>,
  deletedAt?: Maybe<Scalars['Datetime']>,
  /** Reads a single `Person` that is related to this `Track`. */
  person?: Maybe<Person>,
};

/** A condition to be used against `Track` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TrackCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `personId` field. */
  personId?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `image` field. */
  image?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `file` field. */
  file?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `public` field. */
  public?: Maybe<Scalars['Boolean']>,
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: Maybe<Scalars['Datetime']>,
};

/** An input for mutations affecting `Track` */
export type TrackInput = {
  id?: Maybe<Scalars['Int']>,
  personId?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  file?: Maybe<Scalars['String']>,
  public?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  publishedAt?: Maybe<Scalars['Datetime']>,
  deletedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `Track`. Fields that are set will be updated. */
export type TrackPatch = {
  id?: Maybe<Scalars['Int']>,
  personId?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  file?: Maybe<Scalars['String']>,
  public?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  publishedAt?: Maybe<Scalars['Datetime']>,
  deletedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `Track` values. */
export type TracksConnection = {
   __typename?: 'TracksConnection',
  /** A list of `Track` objects. */
  nodes: Array<Maybe<Track>>,
  /** A list of edges which contains the `Track` and cursor to aid in pagination. */
  edges: Array<TracksEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Track` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Track` edge in the connection. */
export type TracksEdge = {
   __typename?: 'TracksEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Track` at the end of the edge. */
  node?: Maybe<Track>,
};

/** Methods to use when ordering `Track`. */
export enum TracksOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PersonIdAsc = 'PERSON_ID_ASC',
  PersonIdDesc = 'PERSON_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  FileAsc = 'FILE_ASC',
  FileDesc = 'FILE_DESC',
  PublicAsc = 'PUBLIC_ASC',
  PublicDesc = 'PUBLIC_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updatePersonAccountByEmail` mutation. */
export type UpdatePersonAccountByEmailInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `PersonAccount` being updated. */
  patch: PersonAccountPatch,
  /** The email address of the person. */
  email: Scalars['String'],
};

/** All input for the `updatePersonAccountByNodeId` mutation. */
export type UpdatePersonAccountByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `PersonAccount` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `PersonAccount` being updated. */
  patch: PersonAccountPatch,
};

/** All input for the `updatePersonAccount` mutation. */
export type UpdatePersonAccountInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `PersonAccount` being updated. */
  patch: PersonAccountPatch,
  /** The id of the person associated with this account. */
  personId: Scalars['Int'],
};

/** The output of our update `PersonAccount` mutation. */
export type UpdatePersonAccountPayload = {
   __typename?: 'UpdatePersonAccountPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `PersonAccount` that was updated by this mutation. */
  personAccount?: Maybe<PersonAccount>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Person` that is related to this `PersonAccount`. */
  person?: Maybe<Person>,
  /** An edge for our `PersonAccount`. May be used by Relay 1. */
  personAccountEdge?: Maybe<PersonAccountsEdge>,
};


/** The output of our update `PersonAccount` mutation. */
export type UpdatePersonAccountPayloadPersonAccountEdgeArgs = {
  orderBy?: Maybe<Array<PersonAccountsOrderBy>>
};

/** All input for the `updatePersonByNodeId` mutation. */
export type UpdatePersonByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Person` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch,
};

/** All input for the `updatePersonByUsername` mutation. */
export type UpdatePersonByUsernameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch,
  username: Scalars['String'],
};

/** All input for the `updatePerson` mutation. */
export type UpdatePersonInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Person` being updated. */
  patch: PersonPatch,
  /** The primary unique identifier for the person. */
  id: Scalars['Int'],
};

/** The output of our update `Person` mutation. */
export type UpdatePersonPayload = {
   __typename?: 'UpdatePersonPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Person` that was updated by this mutation. */
  person?: Maybe<Person>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>,
};


/** The output of our update `Person` mutation. */
export type UpdatePersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>
};

/** All input for the `updateTrackByNodeId` mutation. */
export type UpdateTrackByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Track` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Track` being updated. */
  patch: TrackPatch,
};

/** All input for the `updateTrack` mutation. */
export type UpdateTrackInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Track` being updated. */
  patch: TrackPatch,
  id: Scalars['Int'],
};

/** The output of our update `Track` mutation. */
export type UpdateTrackPayload = {
   __typename?: 'UpdateTrackPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Track` that was updated by this mutation. */
  track?: Maybe<Track>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Person` that is related to this `Track`. */
  person?: Maybe<Person>,
  /** An edge for our `Track`. May be used by Relay 1. */
  trackEdge?: Maybe<TracksEdge>,
};


/** The output of our update `Track` mutation. */
export type UpdateTrackPayloadTrackEdgeArgs = {
  orderBy?: Maybe<Array<TracksOrderBy>>
};

export type AuthenticateMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type AuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { authenticate: Maybe<(
    { __typename?: 'AuthenticatePayload' }
    & Pick<AuthenticatePayload, 'jwtToken'>
  )> }
);

export type CurrentPersonQueryVariables = {};


export type CurrentPersonQuery = (
  { __typename?: 'Query' }
  & { currentPerson: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'fullName' | 'firstName' | 'lastName' | 'about' | 'createdAt' | 'updatedAt'>
  )> }
);

export type RegisterUserMutationVariables = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerPerson: Maybe<(
    { __typename?: 'RegisterPersonPayload' }
    & { person: Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'fullName' | 'firstName' | 'lastName' | 'about' | 'createdAt' | 'updatedAt'>
    )> }
  )> }
);

export type UserTracksQueryVariables = {
  userId: Scalars['Int']
};


export type UserTracksQuery = (
  { __typename?: 'Query' }
  & { tracks: Maybe<(
    { __typename?: 'TracksConnection' }
    & Pick<TracksConnection, 'totalCount'>
    & { nodes: Array<Maybe<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'name' | 'image' | 'file' | 'public' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'deletedAt'>
    )>> }
  )> }
);


export const AuthenticateDocument = gql`
    mutation authenticate($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    jwtToken
  }
}
    `;
export type AuthenticateMutationFn = ApolloReactCommon.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;
export type AuthenticateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AuthenticateMutation, AuthenticateMutationVariables>, 'mutation'>;

    export const AuthenticateComponent = (props: AuthenticateComponentProps) => (
      <ApolloReactComponents.Mutation<AuthenticateMutation, AuthenticateMutationVariables> mutation={AuthenticateDocument} {...props} />
    );
    

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>) {
        return ApolloReactHooks.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, baseOptions);
      }
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = ApolloReactCommon.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export const CurrentPersonDocument = gql`
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
export type CurrentPersonComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentPersonQuery, CurrentPersonQueryVariables>, 'query'>;

    export const CurrentPersonComponent = (props: CurrentPersonComponentProps) => (
      <ApolloReactComponents.Query<CurrentPersonQuery, CurrentPersonQueryVariables> query={CurrentPersonDocument} {...props} />
    );
    

/**
 * __useCurrentPersonQuery__
 *
 * To run a query within a React component, call `useCurrentPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentPersonQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentPersonQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentPersonQuery, CurrentPersonQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentPersonQuery, CurrentPersonQueryVariables>(CurrentPersonDocument, baseOptions);
      }
export function useCurrentPersonLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentPersonQuery, CurrentPersonQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentPersonQuery, CurrentPersonQueryVariables>(CurrentPersonDocument, baseOptions);
        }
export type CurrentPersonQueryHookResult = ReturnType<typeof useCurrentPersonQuery>;
export type CurrentPersonLazyQueryHookResult = ReturnType<typeof useCurrentPersonLazyQuery>;
export type CurrentPersonQueryResult = ApolloReactCommon.QueryResult<CurrentPersonQuery, CurrentPersonQueryVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  registerPerson(input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}) {
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
export type RegisterUserMutationFn = ApolloReactCommon.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
export type RegisterUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterUserMutation, RegisterUserMutationVariables>, 'mutation'>;

    export const RegisterUserComponent = (props: RegisterUserComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterUserMutation, RegisterUserMutationVariables> mutation={RegisterUserDocument} {...props} />
    );
    

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = ApolloReactCommon.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UserTracksDocument = gql`
    query userTracks($userId: Int!) {
  tracks(condition: {personId: $userId}) {
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
    `;
export type UserTracksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserTracksQuery, UserTracksQueryVariables>, 'query'> & ({ variables: UserTracksQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserTracksComponent = (props: UserTracksComponentProps) => (
      <ApolloReactComponents.Query<UserTracksQuery, UserTracksQueryVariables> query={UserTracksDocument} {...props} />
    );
    

/**
 * __useUserTracksQuery__
 *
 * To run a query within a React component, call `useUserTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTracksQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserTracksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserTracksQuery, UserTracksQueryVariables>) {
        return ApolloReactHooks.useQuery<UserTracksQuery, UserTracksQueryVariables>(UserTracksDocument, baseOptions);
      }
export function useUserTracksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserTracksQuery, UserTracksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserTracksQuery, UserTracksQueryVariables>(UserTracksDocument, baseOptions);
        }
export type UserTracksQueryHookResult = ReturnType<typeof useUserTracksQuery>;
export type UserTracksLazyQueryHookResult = ReturnType<typeof useUserTracksLazyQuery>;
export type UserTracksQueryResult = ApolloReactCommon.QueryResult<UserTracksQuery, UserTracksQueryVariables>;