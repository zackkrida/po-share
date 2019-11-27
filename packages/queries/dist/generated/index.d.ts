/// <reference types="react" />
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A location in a connection that can be used for resuming pagination. */
    Cursor: any;
    /**
   * A point in time as described by the [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   **/
    Datetime: any;
    /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
     * which securely represents claims between two parties.
   **/
    JwtToken: any;
};
/** All input for the `authenticate` mutation. */
export declare type AuthenticateInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    password: Scalars['String'];
};
/** The output of our `authenticate` mutation. */
export declare type AuthenticatePayload = {
    __typename?: 'AuthenticatePayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    jwtToken?: Maybe<Scalars['JwtToken']>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
};
/** All input for the create `Track` mutation. */
export declare type CreateTrackInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** The `Track` to be created by this mutation. */
    track: TrackInput;
};
/** The output of our create `Track` mutation. */
export declare type CreateTrackPayload = {
    __typename?: 'CreateTrackPayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** The `Track` that was created by this mutation. */
    track?: Maybe<Track>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
    /** Reads a single `Person` that is related to this `Track`. */
    person?: Maybe<Person>;
    /** An edge for our `Track`. May be used by Relay 1. */
    trackEdge?: Maybe<TracksEdge>;
};
/** The output of our create `Track` mutation. */
export declare type CreateTrackPayloadTrackEdgeArgs = {
    orderBy?: Maybe<Array<TracksOrderBy>>;
};
/** All input for the create `TrackSearch` mutation. */
export declare type CreateTrackSearchInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** The `TrackSearch` to be created by this mutation. */
    trackSearch: TrackSearchInput;
};
/** The output of our create `TrackSearch` mutation. */
export declare type CreateTrackSearchPayload = {
    __typename?: 'CreateTrackSearchPayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** The `TrackSearch` that was created by this mutation. */
    trackSearch?: Maybe<TrackSearch>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
    /** An edge for our `TrackSearch`. May be used by Relay 1. */
    trackSearchEdge?: Maybe<TrackSearchesEdge>;
};
/** The output of our create `TrackSearch` mutation. */
export declare type CreateTrackSearchPayloadTrackSearchEdgeArgs = {
    orderBy?: Maybe<Array<TrackSearchesOrderBy>>;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type Mutation = {
    __typename?: 'Mutation';
    /** Creates a single `Track`. */
    createTrack?: Maybe<CreateTrackPayload>;
    /** Creates a single `TrackSearch`. */
    createTrackSearch?: Maybe<CreateTrackSearchPayload>;
    /** Updates a single `Person` using a unique key and a patch. */
    updatePerson?: Maybe<UpdatePersonPayload>;
    /** Updates a single `Person` using a unique key and a patch. */
    updatePersonByUsername?: Maybe<UpdatePersonPayload>;
    /** Updates a single `Track` using a unique key and a patch. */
    updateTrack?: Maybe<UpdateTrackPayload>;
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
export declare type MutationCreateTrackArgs = {
    input: CreateTrackInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationCreateTrackSearchArgs = {
    input: CreateTrackSearchInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdatePersonArgs = {
    input: UpdatePersonInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdatePersonByUsernameArgs = {
    input: UpdatePersonByUsernameInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdateTrackArgs = {
    input: UpdateTrackInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdatePersonAccountArgs = {
    input: UpdatePersonAccountInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdatePersonAccountByEmailArgs = {
    input: UpdatePersonAccountByEmailInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationAuthenticateArgs = {
    input: AuthenticateInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationRegisterPersonArgs = {
    input: RegisterPersonInput;
};
/** Information about pagination in a connection. */
export declare type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['Cursor']>;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['Cursor']>;
};
/** A connection to a list of `Person` values. */
export declare type PeopleConnection = {
    __typename?: 'PeopleConnection';
    /** A list of `Person` objects. */
    nodes: Array<Maybe<Person>>;
    /** A list of edges which contains the `Person` and cursor to aid in pagination. */
    edges: Array<PeopleEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Person` you could get from the connection. */
    totalCount: Scalars['Int'];
};
/** A `Person` edge in the connection. */
export declare type PeopleEdge = {
    __typename?: 'PeopleEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']>;
    /** The `Person` at the end of the edge. */
    node?: Maybe<Person>;
};
/** Methods to use when ordering `Person`. */
export declare enum PeopleOrderBy {
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
    UsernameAsc = "USERNAME_ASC",
    UsernameDesc = "USERNAME_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
export declare type Person = {
    __typename?: 'Person';
    /** The primary unique identifier for the person. */
    id: Scalars['Int'];
    /** The person’s first name. */
    firstName: Scalars['String'];
    /** The person’s last name. */
    lastName?: Maybe<Scalars['String']>;
    /** A short description about the user, written by the user. */
    about?: Maybe<Scalars['String']>;
    /** The time this person was created. */
    createdAt?: Maybe<Scalars['Datetime']>;
    updatedAt?: Maybe<Scalars['Datetime']>;
    username?: Maybe<Scalars['String']>;
    /** Reads a single `PersonAccount` that is related to this `Person`. */
    personAccountByPersonId?: Maybe<PersonAccount>;
    /** Reads and enables pagination through a set of `PersonAccount`. */
    personAccounts: PersonAccountsConnection;
    /** Reads and enables pagination through a set of `Track`. */
    tracks: TracksConnection;
    /** A person’s full name which is a concatenation of their first and last name. */
    fullName?: Maybe<Scalars['String']>;
};
export declare type PersonPersonAccountsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
    condition?: Maybe<PersonAccountCondition>;
};
export declare type PersonTracksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<TracksOrderBy>>;
    condition?: Maybe<TrackCondition>;
};
export declare type PersonAccount = {
    __typename?: 'PersonAccount';
    /** The id of the person associated with this account. */
    personId: Scalars['Int'];
    /** The email address of the person. */
    email: Scalars['String'];
    /** An opaque hash of the person’s password. */
    passwordHash: Scalars['String'];
    /** Reads a single `Person` that is related to this `PersonAccount`. */
    person?: Maybe<Person>;
};
/**
 * A condition to be used against `PersonAccount` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 **/
export declare type PersonAccountCondition = {
    /** Checks for equality with the object’s `personId` field. */
    personId?: Maybe<Scalars['Int']>;
    /** Checks for equality with the object’s `email` field. */
    email?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `passwordHash` field. */
    passwordHash?: Maybe<Scalars['String']>;
};
/** Represents an update to a `PersonAccount`. Fields that are set will be updated. */
export declare type PersonAccountPatch = {
    /** The id of the person associated with this account. */
    personId?: Maybe<Scalars['Int']>;
    /** The email address of the person. */
    email?: Maybe<Scalars['String']>;
    /** An opaque hash of the person’s password. */
    passwordHash?: Maybe<Scalars['String']>;
};
/** A connection to a list of `PersonAccount` values. */
export declare type PersonAccountsConnection = {
    __typename?: 'PersonAccountsConnection';
    /** A list of `PersonAccount` objects. */
    nodes: Array<Maybe<PersonAccount>>;
    /** A list of edges which contains the `PersonAccount` and cursor to aid in pagination. */
    edges: Array<PersonAccountsEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `PersonAccount` you could get from the connection. */
    totalCount: Scalars['Int'];
};
/** A `PersonAccount` edge in the connection. */
export declare type PersonAccountsEdge = {
    __typename?: 'PersonAccountsEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']>;
    /** The `PersonAccount` at the end of the edge. */
    node?: Maybe<PersonAccount>;
};
/** Methods to use when ordering `PersonAccount`. */
export declare enum PersonAccountsOrderBy {
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
export declare type PersonCondition = {
    /** Checks for equality with the object’s `id` field. */
    id?: Maybe<Scalars['Int']>;
    /** Checks for equality with the object’s `firstName` field. */
    firstName?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `lastName` field. */
    lastName?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `about` field. */
    about?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `createdAt` field. */
    createdAt?: Maybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `updatedAt` field. */
    updatedAt?: Maybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `username` field. */
    username?: Maybe<Scalars['String']>;
};
/** Represents an update to a `Person`. Fields that are set will be updated. */
export declare type PersonPatch = {
    /** The primary unique identifier for the person. */
    id?: Maybe<Scalars['Int']>;
    /** The person’s first name. */
    firstName?: Maybe<Scalars['String']>;
    /** The person’s last name. */
    lastName?: Maybe<Scalars['String']>;
    /** A short description about the user, written by the user. */
    about?: Maybe<Scalars['String']>;
    /** The time this person was created. */
    createdAt?: Maybe<Scalars['Datetime']>;
    updatedAt?: Maybe<Scalars['Datetime']>;
    username?: Maybe<Scalars['String']>;
};
/** The root query type which gives access points into the data universe. */
export declare type Query = {
    __typename?: 'Query';
    /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
     * which can only query top level fields if they are in a particular form.
   **/
    query: Query;
    /** Reads and enables pagination through a set of `Person`. */
    people?: Maybe<PeopleConnection>;
    /** Reads and enables pagination through a set of `Track`. */
    tracks?: Maybe<TracksConnection>;
    /** Reads and enables pagination through a set of `TrackSearch`. */
    trackSearches?: Maybe<TrackSearchesConnection>;
    /** Reads and enables pagination through a set of `PersonAccount`. */
    personAccounts?: Maybe<PersonAccountsConnection>;
    person?: Maybe<Person>;
    personByUsername?: Maybe<Person>;
    track?: Maybe<Track>;
    personAccount?: Maybe<PersonAccount>;
    personAccountByEmail?: Maybe<PersonAccount>;
    /** Gets the person who was identified by our JWT. */
    currentPerson?: Maybe<Person>;
    /** Reads and enables pagination through a set of `TrackSearch`. */
    search: TrackSearchesConnection;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPeopleArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<PeopleOrderBy>>;
    condition?: Maybe<PersonCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryTracksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<TracksOrderBy>>;
    condition?: Maybe<TrackCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryTrackSearchesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<TrackSearchesOrderBy>>;
    condition?: Maybe<TrackSearchCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
    orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
    condition?: Maybe<PersonAccountCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonArgs = {
    id: Scalars['Int'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonByUsernameArgs = {
    username: Scalars['String'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryTrackArgs = {
    id: Scalars['Int'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountArgs = {
    personId: Scalars['Int'];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountByEmailArgs = {
    email: Scalars['String'];
};
/** The root query type which gives access points into the data universe. */
export declare type QuerySearchArgs = {
    search?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['Cursor']>;
    after?: Maybe<Scalars['Cursor']>;
};
/** All input for the `registerPerson` mutation. */
export declare type RegisterPersonInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
/** The output of our `registerPerson` mutation. */
export declare type RegisterPersonPayload = {
    __typename?: 'RegisterPersonPayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    person?: Maybe<Person>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
    /** An edge for our `Person`. May be used by Relay 1. */
    personEdge?: Maybe<PeopleEdge>;
};
/** The output of our `registerPerson` mutation. */
export declare type RegisterPersonPayloadPersonEdgeArgs = {
    orderBy?: Maybe<Array<PeopleOrderBy>>;
};
export declare type Track = {
    __typename?: 'Track';
    id: Scalars['Int'];
    personId?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    image?: Maybe<Scalars['String']>;
    file?: Maybe<Scalars['String']>;
    public?: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['Datetime']>;
    updatedAt?: Maybe<Scalars['Datetime']>;
    publishedAt?: Maybe<Scalars['Datetime']>;
    deletedAt?: Maybe<Scalars['Datetime']>;
    /** Reads a single `Person` that is related to this `Track`. */
    person?: Maybe<Person>;
};
/** A condition to be used against `Track` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export declare type TrackCondition = {
    /** Checks for equality with the object’s `id` field. */
    id?: Maybe<Scalars['Int']>;
    /** Checks for equality with the object’s `personId` field. */
    personId?: Maybe<Scalars['Int']>;
    /** Checks for equality with the object’s `name` field. */
    name?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `image` field. */
    image?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `file` field. */
    file?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `public` field. */
    public?: Maybe<Scalars['Boolean']>;
    /** Checks for equality with the object’s `createdAt` field. */
    createdAt?: Maybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `updatedAt` field. */
    updatedAt?: Maybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `publishedAt` field. */
    publishedAt?: Maybe<Scalars['Datetime']>;
    /** Checks for equality with the object’s `deletedAt` field. */
    deletedAt?: Maybe<Scalars['Datetime']>;
};
/** An input for mutations affecting `Track` */
export declare type TrackInput = {
    id?: Maybe<Scalars['Int']>;
    personId?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    image?: Maybe<Scalars['String']>;
    file?: Maybe<Scalars['String']>;
    public?: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['Datetime']>;
    updatedAt?: Maybe<Scalars['Datetime']>;
    publishedAt?: Maybe<Scalars['Datetime']>;
    deletedAt?: Maybe<Scalars['Datetime']>;
};
/** Represents an update to a `Track`. Fields that are set will be updated. */
export declare type TrackPatch = {
    id?: Maybe<Scalars['Int']>;
    personId?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    file?: Maybe<Scalars['String']>;
    public?: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['Datetime']>;
    updatedAt?: Maybe<Scalars['Datetime']>;
    publishedAt?: Maybe<Scalars['Datetime']>;
    deletedAt?: Maybe<Scalars['Datetime']>;
};
/** A connection to a list of `Track` values. */
export declare type TracksConnection = {
    __typename?: 'TracksConnection';
    /** A list of `Track` objects. */
    nodes: Array<Maybe<Track>>;
    /** A list of edges which contains the `Track` and cursor to aid in pagination. */
    edges: Array<TracksEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Track` you could get from the connection. */
    totalCount: Scalars['Int'];
};
export declare type TrackSearch = {
    __typename?: 'TrackSearch';
    searchableId?: Maybe<Scalars['Int']>;
    pretty?: Maybe<Scalars['String']>;
    searchableType?: Maybe<Scalars['String']>;
    term?: Maybe<Scalars['String']>;
};
/**
 * A condition to be used against `TrackSearch` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 **/
export declare type TrackSearchCondition = {
    /** Checks for equality with the object’s `searchableId` field. */
    searchableId?: Maybe<Scalars['Int']>;
    /** Checks for equality with the object’s `pretty` field. */
    pretty?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `searchableType` field. */
    searchableType?: Maybe<Scalars['String']>;
    /** Checks for equality with the object’s `term` field. */
    term?: Maybe<Scalars['String']>;
};
/** A connection to a list of `TrackSearch` values. */
export declare type TrackSearchesConnection = {
    __typename?: 'TrackSearchesConnection';
    /** A list of `TrackSearch` objects. */
    nodes: Array<Maybe<TrackSearch>>;
    /** A list of edges which contains the `TrackSearch` and cursor to aid in pagination. */
    edges: Array<TrackSearchesEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `TrackSearch` you could get from the connection. */
    totalCount: Scalars['Int'];
};
/** A `TrackSearch` edge in the connection. */
export declare type TrackSearchesEdge = {
    __typename?: 'TrackSearchesEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']>;
    /** The `TrackSearch` at the end of the edge. */
    node?: Maybe<TrackSearch>;
};
/** Methods to use when ordering `TrackSearch`. */
export declare enum TrackSearchesOrderBy {
    Natural = "NATURAL",
    SearchableIdAsc = "SEARCHABLE_ID_ASC",
    SearchableIdDesc = "SEARCHABLE_ID_DESC",
    PrettyAsc = "PRETTY_ASC",
    PrettyDesc = "PRETTY_DESC",
    SearchableTypeAsc = "SEARCHABLE_TYPE_ASC",
    SearchableTypeDesc = "SEARCHABLE_TYPE_DESC",
    TermAsc = "TERM_ASC",
    TermDesc = "TERM_DESC"
}
/** An input for mutations affecting `TrackSearch` */
export declare type TrackSearchInput = {
    searchableId?: Maybe<Scalars['Int']>;
    pretty?: Maybe<Scalars['String']>;
    searchableType?: Maybe<Scalars['String']>;
    term?: Maybe<Scalars['String']>;
};
/** A `Track` edge in the connection. */
export declare type TracksEdge = {
    __typename?: 'TracksEdge';
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars['Cursor']>;
    /** The `Track` at the end of the edge. */
    node?: Maybe<Track>;
};
/** Methods to use when ordering `Track`. */
export declare enum TracksOrderBy {
    Natural = "NATURAL",
    IdAsc = "ID_ASC",
    IdDesc = "ID_DESC",
    PersonIdAsc = "PERSON_ID_ASC",
    PersonIdDesc = "PERSON_ID_DESC",
    NameAsc = "NAME_ASC",
    NameDesc = "NAME_DESC",
    ImageAsc = "IMAGE_ASC",
    ImageDesc = "IMAGE_DESC",
    FileAsc = "FILE_ASC",
    FileDesc = "FILE_DESC",
    PublicAsc = "PUBLIC_ASC",
    PublicDesc = "PUBLIC_DESC",
    CreatedAtAsc = "CREATED_AT_ASC",
    CreatedAtDesc = "CREATED_AT_DESC",
    UpdatedAtAsc = "UPDATED_AT_ASC",
    UpdatedAtDesc = "UPDATED_AT_DESC",
    PublishedAtAsc = "PUBLISHED_AT_ASC",
    PublishedAtDesc = "PUBLISHED_AT_DESC",
    DeletedAtAsc = "DELETED_AT_ASC",
    DeletedAtDesc = "DELETED_AT_DESC",
    PrimaryKeyAsc = "PRIMARY_KEY_ASC",
    PrimaryKeyDesc = "PRIMARY_KEY_DESC"
}
/** All input for the `updatePersonAccountByEmail` mutation. */
export declare type UpdatePersonAccountByEmailInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** An object where the defined keys will be set on the `PersonAccount` being updated. */
    patch: PersonAccountPatch;
    /** The email address of the person. */
    email: Scalars['String'];
};
/** All input for the `updatePersonAccount` mutation. */
export declare type UpdatePersonAccountInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** An object where the defined keys will be set on the `PersonAccount` being updated. */
    patch: PersonAccountPatch;
    /** The id of the person associated with this account. */
    personId: Scalars['Int'];
};
/** The output of our update `PersonAccount` mutation. */
export declare type UpdatePersonAccountPayload = {
    __typename?: 'UpdatePersonAccountPayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
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
export declare type UpdatePersonAccountPayloadPersonAccountEdgeArgs = {
    orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
};
/** All input for the `updatePersonByUsername` mutation. */
export declare type UpdatePersonByUsernameInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** An object where the defined keys will be set on the `Person` being updated. */
    patch: PersonPatch;
    username: Scalars['String'];
};
/** All input for the `updatePerson` mutation. */
export declare type UpdatePersonInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** An object where the defined keys will be set on the `Person` being updated. */
    patch: PersonPatch;
    /** The primary unique identifier for the person. */
    id: Scalars['Int'];
};
/** The output of our update `Person` mutation. */
export declare type UpdatePersonPayload = {
    __typename?: 'UpdatePersonPayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** The `Person` that was updated by this mutation. */
    person?: Maybe<Person>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
    /** An edge for our `Person`. May be used by Relay 1. */
    personEdge?: Maybe<PeopleEdge>;
};
/** The output of our update `Person` mutation. */
export declare type UpdatePersonPayloadPersonEdgeArgs = {
    orderBy?: Maybe<Array<PeopleOrderBy>>;
};
/** All input for the `updateTrack` mutation. */
export declare type UpdateTrackInput = {
    /**
   * An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** An object where the defined keys will be set on the `Track` being updated. */
    patch: TrackPatch;
    id: Scalars['Int'];
};
/** The output of our update `Track` mutation. */
export declare type UpdateTrackPayload = {
    __typename?: 'UpdateTrackPayload';
    /**
   * The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
   **/
    clientMutationId?: Maybe<Scalars['String']>;
    /** The `Track` that was updated by this mutation. */
    track?: Maybe<Track>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
    /** Reads a single `Person` that is related to this `Track`. */
    person?: Maybe<Person>;
    /** An edge for our `Track`. May be used by Relay 1. */
    trackEdge?: Maybe<TracksEdge>;
};
/** The output of our update `Track` mutation. */
export declare type UpdateTrackPayloadTrackEdgeArgs = {
    orderBy?: Maybe<Array<TracksOrderBy>>;
};
export declare type AuthenticateMutationVariables = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type AuthenticateMutation = ({
    __typename?: 'Mutation';
} & {
    authenticate: Maybe<({
        __typename?: 'AuthenticatePayload';
    } & Pick<AuthenticatePayload, 'jwtToken'>)>;
});
export declare type CurrentPersonQueryVariables = {};
export declare type CurrentPersonQuery = ({
    __typename?: 'Query';
} & {
    currentPerson: Maybe<({
        __typename?: 'Person';
    } & Pick<Person, 'id' | 'fullName' | 'firstName' | 'lastName' | 'about' | 'createdAt' | 'updatedAt'>)>;
});
export declare type RegisterUserMutationVariables = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type RegisterUserMutation = ({
    __typename?: 'Mutation';
} & {
    registerPerson: Maybe<({
        __typename?: 'RegisterPersonPayload';
    } & {
        person: Maybe<({
            __typename?: 'Person';
        } & Pick<Person, 'id' | 'fullName' | 'firstName' | 'lastName' | 'about' | 'createdAt' | 'updatedAt'>)>;
    })>;
});
export declare type PersonQueryVariables = {
    id: Scalars['Int'];
};
export declare type PersonQuery = ({
    __typename?: 'Query';
} & {
    person: Maybe<({
        __typename?: 'Person';
    } & Pick<Person, 'id' | 'fullName' | 'username'> & {
        tracks: ({
            __typename?: 'TracksConnection';
        } & {
            nodes: Array<Maybe<({
                __typename?: 'Track';
            } & Pick<Track, 'id' | 'name' | 'image' | 'file' | 'public' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'deletedAt'>)>>;
        });
    })>;
});
export declare type TrackQueryVariables = {
    id: Scalars['Int'];
};
export declare type TrackQuery = ({
    __typename?: 'Query';
} & {
    track: Maybe<({
        __typename?: 'Track';
    } & Pick<Track, 'name' | 'file' | 'createdAt'> & {
        person: Maybe<({
            __typename?: 'Person';
        } & Pick<Person, 'id' | 'username'>)>;
    })>;
});
export declare type UserTracksQueryVariables = {
    userId: Scalars['Int'];
};
export declare type UserTracksQuery = ({
    __typename?: 'Query';
} & {
    tracks: Maybe<({
        __typename?: 'TracksConnection';
    } & Pick<TracksConnection, 'totalCount'> & {
        nodes: Array<Maybe<({
            __typename?: 'Track';
        } & Pick<Track, 'id' | 'name' | 'image' | 'file' | 'public' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'deletedAt'>)>>;
    })>;
});
export declare type SearchTracksQueryVariables = {
    term?: Maybe<Scalars['String']>;
};
export declare type SearchTracksQuery = ({
    __typename?: 'Query';
} & {
    search: ({
        __typename?: 'TrackSearchesConnection';
    } & Pick<TrackSearchesConnection, 'totalCount'> & {
        nodes: Array<Maybe<({
            __typename?: 'TrackSearch';
        } & Pick<TrackSearch, 'searchableId' | 'searchableType' | 'term' | 'pretty'>)>>;
    });
});
export declare const AuthenticateDocument: any;
export declare type AuthenticateMutationFn = ApolloReactCommon.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;
export declare type AuthenticateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AuthenticateMutation, AuthenticateMutationVariables>, 'mutation'>;
export declare const AuthenticateComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<AuthenticateMutation, AuthenticateMutationVariables>, "children" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "update" | "client" | "notifyOnNetworkStatusChange" | "context" | "onCompleted" | "onError" | "fetchPolicy" | "ignoreResults">) => JSX.Element;
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
export declare function useAuthenticateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>): ApolloReactHooks.MutationTuple<AuthenticateMutation, AuthenticateMutationVariables>;
export declare type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export declare type AuthenticateMutationResult = ApolloReactCommon.MutationResult<AuthenticateMutation>;
export declare type AuthenticateMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export declare const CurrentPersonDocument: any;
export declare type CurrentPersonComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentPersonQuery, CurrentPersonQueryVariables>, 'query'>;
export declare const CurrentPersonComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<CurrentPersonQuery, CurrentPersonQueryVariables>, "children" | "variables" | "errorPolicy" | "client" | "notifyOnNetworkStatusChange" | "context" | "onCompleted" | "onError" | "fetchPolicy" | "displayName" | "skip" | "ssr" | "pollInterval" | "partialRefetch" | "returnPartialData">) => JSX.Element;
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
export declare function useCurrentPersonQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentPersonQuery, CurrentPersonQueryVariables>): ApolloReactCommon.QueryResult<CurrentPersonQuery, CurrentPersonQueryVariables>;
export declare function useCurrentPersonLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentPersonQuery, CurrentPersonQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<CurrentPersonQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<CurrentPersonQuery, CurrentPersonQueryVariables>];
export declare type CurrentPersonQueryHookResult = ReturnType<typeof useCurrentPersonQuery>;
export declare type CurrentPersonLazyQueryHookResult = ReturnType<typeof useCurrentPersonLazyQuery>;
export declare type CurrentPersonQueryResult = ApolloReactCommon.QueryResult<CurrentPersonQuery, CurrentPersonQueryVariables>;
export declare const RegisterUserDocument: any;
export declare type RegisterUserMutationFn = ApolloReactCommon.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
export declare type RegisterUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterUserMutation, RegisterUserMutationVariables>, 'mutation'>;
export declare const RegisterUserComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<RegisterUserMutation, RegisterUserMutationVariables>, "children" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "update" | "client" | "notifyOnNetworkStatusChange" | "context" | "onCompleted" | "onError" | "fetchPolicy" | "ignoreResults">) => JSX.Element;
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
export declare function useRegisterUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>): ApolloReactHooks.MutationTuple<RegisterUserMutation, RegisterUserMutationVariables>;
export declare type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export declare type RegisterUserMutationResult = ApolloReactCommon.MutationResult<RegisterUserMutation>;
export declare type RegisterUserMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export declare const PersonDocument: any;
export declare type PersonComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PersonQuery, PersonQueryVariables>, 'query'> & ({
    variables: PersonQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const PersonComponent: (props: PersonComponentProps) => JSX.Element;
/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function usePersonQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PersonQuery, PersonQueryVariables>): ApolloReactCommon.QueryResult<PersonQuery, PersonQueryVariables>;
export declare function usePersonLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<PersonQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<PersonQuery, PersonQueryVariables>];
export declare type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export declare type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export declare type PersonQueryResult = ApolloReactCommon.QueryResult<PersonQuery, PersonQueryVariables>;
export declare const TrackDocument: any;
export declare type TrackComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrackQuery, TrackQueryVariables>, 'query'> & ({
    variables: TrackQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const TrackComponent: (props: TrackComponentProps) => JSX.Element;
/**
 * __useTrackQuery__
 *
 * To run a query within a React component, call `useTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useTrackQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackQuery, TrackQueryVariables>): ApolloReactCommon.QueryResult<TrackQuery, TrackQueryVariables>;
export declare function useTrackLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackQuery, TrackQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<TrackQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<TrackQuery, TrackQueryVariables>];
export declare type TrackQueryHookResult = ReturnType<typeof useTrackQuery>;
export declare type TrackLazyQueryHookResult = ReturnType<typeof useTrackLazyQuery>;
export declare type TrackQueryResult = ApolloReactCommon.QueryResult<TrackQuery, TrackQueryVariables>;
export declare const UserTracksDocument: any;
export declare type UserTracksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserTracksQuery, UserTracksQueryVariables>, 'query'> & ({
    variables: UserTracksQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const UserTracksComponent: (props: UserTracksComponentProps) => JSX.Element;
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
export declare function useUserTracksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserTracksQuery, UserTracksQueryVariables>): ApolloReactCommon.QueryResult<UserTracksQuery, UserTracksQueryVariables>;
export declare function useUserTracksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserTracksQuery, UserTracksQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<UserTracksQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<UserTracksQuery, UserTracksQueryVariables>];
export declare type UserTracksQueryHookResult = ReturnType<typeof useUserTracksQuery>;
export declare type UserTracksLazyQueryHookResult = ReturnType<typeof useUserTracksLazyQuery>;
export declare type UserTracksQueryResult = ApolloReactCommon.QueryResult<UserTracksQuery, UserTracksQueryVariables>;
export declare const SearchTracksDocument: any;
export declare type SearchTracksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchTracksQuery, SearchTracksQueryVariables>, 'query'>;
export declare const SearchTracksComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<SearchTracksQuery, SearchTracksQueryVariables>, "children" | "variables" | "errorPolicy" | "client" | "notifyOnNetworkStatusChange" | "context" | "onCompleted" | "onError" | "fetchPolicy" | "displayName" | "skip" | "ssr" | "pollInterval" | "partialRefetch" | "returnPartialData">) => JSX.Element;
/**
 * __useSearchTracksQuery__
 *
 * To run a query within a React component, call `useSearchTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTracksQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export declare function useSearchTracksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchTracksQuery, SearchTracksQueryVariables>): ApolloReactCommon.QueryResult<SearchTracksQuery, SearchTracksQueryVariables>;
export declare function useSearchTracksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchTracksQuery, SearchTracksQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<SearchTracksQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<SearchTracksQuery, SearchTracksQueryVariables>];
export declare type SearchTracksQueryHookResult = ReturnType<typeof useSearchTracksQuery>;
export declare type SearchTracksLazyQueryHookResult = ReturnType<typeof useSearchTracksLazyQuery>;
export declare type SearchTracksQueryResult = ApolloReactCommon.QueryResult<SearchTracksQuery, SearchTracksQueryVariables>;
