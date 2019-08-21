/// <reference types="react" />
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
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
export declare type AuthenticateInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    email: Scalars["String"];
    password: Scalars["String"];
};
/** The output of our `authenticate` mutation. */
export declare type AuthenticatePayload = {
    __typename?: "AuthenticatePayload";
    /** The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    jwtToken?: Maybe<Scalars["JwtToken"]>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
};
/** All input for the create `Track` mutation. */
export declare type CreateTrackInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** The `Track` to be created by this mutation. */
    track: TrackInput;
};
/** The output of our create `Track` mutation. */
export declare type CreateTrackPayload = {
    __typename?: "CreateTrackPayload";
    /** The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
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
/** All input for the `deleteTrackByNodeId` mutation. */
export declare type DeleteTrackByNodeIdInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** The globally unique `ID` which will identify a single `Track` to be deleted. */
    nodeId: Scalars["ID"];
};
/** All input for the `deleteTrack` mutation. */
export declare type DeleteTrackInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    id: Scalars["Int"];
};
/** The output of our delete `Track` mutation. */
export declare type DeleteTrackPayload = {
    __typename?: "DeleteTrackPayload";
    /** The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** The `Track` that was deleted by this mutation. */
    track?: Maybe<Track>;
    deletedTrackNodeId?: Maybe<Scalars["ID"]>;
    /** Our root query field type. Allows us to run any query from our mutation payload. */
    query?: Maybe<Query>;
    /** Reads a single `Person` that is related to this `Track`. */
    person?: Maybe<Person>;
    /** An edge for our `Track`. May be used by Relay 1. */
    trackEdge?: Maybe<TracksEdge>;
};
/** The output of our delete `Track` mutation. */
export declare type DeleteTrackPayloadTrackEdgeArgs = {
    orderBy?: Maybe<Array<TracksOrderBy>>;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type Mutation = {
    __typename?: "Mutation";
    /** Creates a single `Track`. */
    createTrack?: Maybe<CreateTrackPayload>;
    /** Updates a single `Person` using its globally unique id and a patch. */
    updatePersonByNodeId?: Maybe<UpdatePersonPayload>;
    /** Updates a single `Person` using a unique key and a patch. */
    updatePerson?: Maybe<UpdatePersonPayload>;
    /** Updates a single `Person` using a unique key and a patch. */
    updatePersonByUsername?: Maybe<UpdatePersonPayload>;
    /** Updates a single `Track` using its globally unique id and a patch. */
    updateTrackByNodeId?: Maybe<UpdateTrackPayload>;
    /** Updates a single `Track` using a unique key and a patch. */
    updateTrack?: Maybe<UpdateTrackPayload>;
    /** Updates a single `PersonAccount` using its globally unique id and a patch. */
    updatePersonAccountByNodeId?: Maybe<UpdatePersonAccountPayload>;
    /** Updates a single `PersonAccount` using a unique key and a patch. */
    updatePersonAccount?: Maybe<UpdatePersonAccountPayload>;
    /** Updates a single `PersonAccount` using a unique key and a patch. */
    updatePersonAccountByEmail?: Maybe<UpdatePersonAccountPayload>;
    /** Deletes a single `Track` using its globally unique id. */
    deleteTrackByNodeId?: Maybe<DeleteTrackPayload>;
    /** Deletes a single `Track` using a unique key. */
    deleteTrack?: Maybe<DeleteTrackPayload>;
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
export declare type MutationUpdatePersonByNodeIdArgs = {
    input: UpdatePersonByNodeIdInput;
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
export declare type MutationUpdateTrackByNodeIdArgs = {
    input: UpdateTrackByNodeIdInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdateTrackArgs = {
    input: UpdateTrackInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationUpdatePersonAccountByNodeIdArgs = {
    input: UpdatePersonAccountByNodeIdInput;
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
export declare type MutationDeleteTrackByNodeIdArgs = {
    input: DeleteTrackByNodeIdInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationDeleteTrackArgs = {
    input: DeleteTrackInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationAuthenticateArgs = {
    input: AuthenticateInput;
};
/** The root mutation type which contains root level fields which mutate data. */
export declare type MutationRegisterPersonArgs = {
    input: RegisterPersonInput;
};
/** An object with a globally unique `ID`. */
export declare type Node = {
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars["ID"];
};
/** Information about pagination in a connection. */
export declare type PageInfo = {
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
export declare type PeopleConnection = {
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
export declare type PeopleEdge = {
    __typename?: "PeopleEdge";
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars["Cursor"]>;
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
export declare type Person = Node & {
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
    username?: Maybe<Scalars["String"]>;
    /** Reads a single `PersonAccount` that is related to this `Person`. */
    personAccountByPersonId?: Maybe<PersonAccount>;
    /** Reads and enables pagination through a set of `PersonAccount`. */
    personAccounts: PersonAccountsConnection;
    /** Reads and enables pagination through a set of `Track`. */
    tracks: TracksConnection;
    /** A person’s full name which is a concatenation of their first and last name. */
    fullName?: Maybe<Scalars["String"]>;
};
export declare type PersonPersonAccountsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["Cursor"]>;
    after?: Maybe<Scalars["Cursor"]>;
    orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
    condition?: Maybe<PersonAccountCondition>;
};
export declare type PersonTracksArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["Cursor"]>;
    after?: Maybe<Scalars["Cursor"]>;
    orderBy?: Maybe<Array<TracksOrderBy>>;
    condition?: Maybe<TrackCondition>;
};
export declare type PersonAccount = Node & {
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
export declare type PersonAccountCondition = {
    /** Checks for equality with the object’s `personId` field. */
    personId?: Maybe<Scalars["Int"]>;
    /** Checks for equality with the object’s `email` field. */
    email?: Maybe<Scalars["String"]>;
    /** Checks for equality with the object’s `passwordHash` field. */
    passwordHash?: Maybe<Scalars["String"]>;
};
/** Represents an update to a `PersonAccount`. Fields that are set will be updated. */
export declare type PersonAccountPatch = {
    /** The id of the person associated with this account. */
    personId?: Maybe<Scalars["Int"]>;
    /** The email address of the person. */
    email?: Maybe<Scalars["String"]>;
    /** An opaque hash of the person’s password. */
    passwordHash?: Maybe<Scalars["String"]>;
};
/** A connection to a list of `PersonAccount` values. */
export declare type PersonAccountsConnection = {
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
export declare type PersonAccountsEdge = {
    __typename?: "PersonAccountsEdge";
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars["Cursor"]>;
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
    /** Checks for equality with the object’s `username` field. */
    username?: Maybe<Scalars["String"]>;
};
/** Represents an update to a `Person`. Fields that are set will be updated. */
export declare type PersonPatch = {
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
    username?: Maybe<Scalars["String"]>;
};
/** The root query type which gives access points into the data universe. */
export declare type Query = Node & {
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
    /** Reads and enables pagination through a set of `Track`. */
    tracks?: Maybe<TracksConnection>;
    /** Reads and enables pagination through a set of `PersonAccount`. */
    personAccounts?: Maybe<PersonAccountsConnection>;
    person?: Maybe<Person>;
    personByUsername?: Maybe<Person>;
    track?: Maybe<Track>;
    personAccount?: Maybe<PersonAccount>;
    personAccountByEmail?: Maybe<PersonAccount>;
    /** Gets the person who was identified by our JWT. */
    currentPerson?: Maybe<Person>;
    /** Reads a single `Person` using its globally unique `ID`. */
    personByNodeId?: Maybe<Person>;
    /** Reads a single `Track` using its globally unique `ID`. */
    trackByNodeId?: Maybe<Track>;
    /** Reads a single `PersonAccount` using its globally unique `ID`. */
    personAccountByNodeId?: Maybe<PersonAccount>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryNodeArgs = {
    nodeId: Scalars["ID"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPeopleArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["Cursor"]>;
    after?: Maybe<Scalars["Cursor"]>;
    orderBy?: Maybe<Array<PeopleOrderBy>>;
    condition?: Maybe<PersonCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryTracksArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["Cursor"]>;
    after?: Maybe<Scalars["Cursor"]>;
    orderBy?: Maybe<Array<TracksOrderBy>>;
    condition?: Maybe<TrackCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    before?: Maybe<Scalars["Cursor"]>;
    after?: Maybe<Scalars["Cursor"]>;
    orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
    condition?: Maybe<PersonAccountCondition>;
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonArgs = {
    id: Scalars["Int"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonByUsernameArgs = {
    username: Scalars["String"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryTrackArgs = {
    id: Scalars["Int"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountArgs = {
    personId: Scalars["Int"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountByEmailArgs = {
    email: Scalars["String"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonByNodeIdArgs = {
    nodeId: Scalars["ID"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryTrackByNodeIdArgs = {
    nodeId: Scalars["ID"];
};
/** The root query type which gives access points into the data universe. */
export declare type QueryPersonAccountByNodeIdArgs = {
    nodeId: Scalars["ID"];
};
/** All input for the `registerPerson` mutation. */
export declare type RegisterPersonInput = {
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
export declare type RegisterPersonPayload = {
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
export declare type RegisterPersonPayloadPersonEdgeArgs = {
    orderBy?: Maybe<Array<PeopleOrderBy>>;
};
export declare type Track = Node & {
    __typename?: "Track";
    /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
    nodeId: Scalars["ID"];
    id: Scalars["Int"];
    personId?: Maybe<Scalars["Int"]>;
    name: Scalars["String"];
    image?: Maybe<Scalars["String"]>;
    file?: Maybe<Scalars["String"]>;
    public?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["Datetime"]>;
    updatedAt?: Maybe<Scalars["Datetime"]>;
    publishedAt?: Maybe<Scalars["Datetime"]>;
    deletedAt?: Maybe<Scalars["Datetime"]>;
    /** Reads a single `Person` that is related to this `Track`. */
    person?: Maybe<Person>;
};
/** A condition to be used against `Track` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export declare type TrackCondition = {
    /** Checks for equality with the object’s `id` field. */
    id?: Maybe<Scalars["Int"]>;
    /** Checks for equality with the object’s `personId` field. */
    personId?: Maybe<Scalars["Int"]>;
    /** Checks for equality with the object’s `name` field. */
    name?: Maybe<Scalars["String"]>;
    /** Checks for equality with the object’s `image` field. */
    image?: Maybe<Scalars["String"]>;
    /** Checks for equality with the object’s `file` field. */
    file?: Maybe<Scalars["String"]>;
    /** Checks for equality with the object’s `public` field. */
    public?: Maybe<Scalars["Boolean"]>;
    /** Checks for equality with the object’s `createdAt` field. */
    createdAt?: Maybe<Scalars["Datetime"]>;
    /** Checks for equality with the object’s `updatedAt` field. */
    updatedAt?: Maybe<Scalars["Datetime"]>;
    /** Checks for equality with the object’s `publishedAt` field. */
    publishedAt?: Maybe<Scalars["Datetime"]>;
    /** Checks for equality with the object’s `deletedAt` field. */
    deletedAt?: Maybe<Scalars["Datetime"]>;
};
/** An input for mutations affecting `Track` */
export declare type TrackInput = {
    id?: Maybe<Scalars["Int"]>;
    personId?: Maybe<Scalars["Int"]>;
    name: Scalars["String"];
    image?: Maybe<Scalars["String"]>;
    file?: Maybe<Scalars["String"]>;
    public?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["Datetime"]>;
    updatedAt?: Maybe<Scalars["Datetime"]>;
    publishedAt?: Maybe<Scalars["Datetime"]>;
    deletedAt?: Maybe<Scalars["Datetime"]>;
};
/** Represents an update to a `Track`. Fields that are set will be updated. */
export declare type TrackPatch = {
    id?: Maybe<Scalars["Int"]>;
    personId?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["String"]>;
    file?: Maybe<Scalars["String"]>;
    public?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["Datetime"]>;
    updatedAt?: Maybe<Scalars["Datetime"]>;
    publishedAt?: Maybe<Scalars["Datetime"]>;
    deletedAt?: Maybe<Scalars["Datetime"]>;
};
/** A connection to a list of `Track` values. */
export declare type TracksConnection = {
    __typename?: "TracksConnection";
    /** A list of `Track` objects. */
    nodes: Array<Maybe<Track>>;
    /** A list of edges which contains the `Track` and cursor to aid in pagination. */
    edges: Array<TracksEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** The count of *all* `Track` you could get from the connection. */
    totalCount: Scalars["Int"];
};
/** A `Track` edge in the connection. */
export declare type TracksEdge = {
    __typename?: "TracksEdge";
    /** A cursor for use in pagination. */
    cursor?: Maybe<Scalars["Cursor"]>;
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
export declare type UpdatePersonAccountByNodeIdInput = {
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
export declare type UpdatePersonAccountInput = {
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
export declare type UpdatePersonAccountPayload = {
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
export declare type UpdatePersonAccountPayloadPersonAccountEdgeArgs = {
    orderBy?: Maybe<Array<PersonAccountsOrderBy>>;
};
/** All input for the `updatePersonByNodeId` mutation. */
export declare type UpdatePersonByNodeIdInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** The globally unique `ID` which will identify a single `Person` to be updated. */
    nodeId: Scalars["ID"];
    /** An object where the defined keys will be set on the `Person` being updated. */
    patch: PersonPatch;
};
/** All input for the `updatePersonByUsername` mutation. */
export declare type UpdatePersonByUsernameInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** An object where the defined keys will be set on the `Person` being updated. */
    patch: PersonPatch;
    username: Scalars["String"];
};
/** All input for the `updatePerson` mutation. */
export declare type UpdatePersonInput = {
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
export declare type UpdatePersonPayload = {
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
export declare type UpdatePersonPayloadPersonEdgeArgs = {
    orderBy?: Maybe<Array<PeopleOrderBy>>;
};
/** All input for the `updateTrackByNodeId` mutation. */
export declare type UpdateTrackByNodeIdInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** The globally unique `ID` which will identify a single `Track` to be updated. */
    nodeId: Scalars["ID"];
    /** An object where the defined keys will be set on the `Track` being updated. */
    patch: TrackPatch;
};
/** All input for the `updateTrack` mutation. */
export declare type UpdateTrackInput = {
    /** An arbitrary string value with no semantic meaning. Will be included in the
     * payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
    /** An object where the defined keys will be set on the `Track` being updated. */
    patch: TrackPatch;
    id: Scalars["Int"];
};
/** The output of our update `Track` mutation. */
export declare type UpdateTrackPayload = {
    __typename?: "UpdateTrackPayload";
    /** The exact same `clientMutationId` that was provided in the mutation input,
     * unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId?: Maybe<Scalars["String"]>;
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
    email: Scalars["String"];
    password: Scalars["String"];
};
export declare type AuthenticateMutation = {
    __typename?: "Mutation";
} & {
    authenticate: Maybe<{
        __typename?: "AuthenticatePayload";
    } & Pick<AuthenticatePayload, "jwtToken">>;
};
export declare type CurrentPersonQueryVariables = {};
export declare type CurrentPersonQuery = {
    __typename?: "Query";
} & {
    currentPerson: Maybe<{
        __typename?: "Person";
    } & Pick<Person, "id" | "fullName" | "firstName" | "lastName" | "about" | "createdAt" | "updatedAt">>;
};
export declare type RegisterUserMutationVariables = {
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
};
export declare type RegisterUserMutation = {
    __typename?: "Mutation";
} & {
    registerPerson: Maybe<{
        __typename?: "RegisterPersonPayload";
    } & {
        person: Maybe<{
            __typename?: "Person";
        } & Pick<Person, "id" | "fullName" | "firstName" | "lastName" | "about" | "createdAt" | "updatedAt">>;
    }>;
};
export declare type UserTracksQueryVariables = {
    userId: Scalars["Int"];
};
export declare type UserTracksQuery = {
    __typename?: "Query";
} & {
    tracks: Maybe<{
        __typename?: "TracksConnection";
    } & Pick<TracksConnection, "totalCount"> & {
        nodes: Array<Maybe<{
            __typename?: "Track";
        } & Pick<Track, "id" | "name" | "image" | "file" | "public" | "createdAt" | "updatedAt" | "publishedAt" | "updatedAt" | "deletedAt">>>;
    }>;
};
export declare const AuthenticateDocument: any;
export declare type AuthenticateMutationFn = ReactApollo.MutationFn<AuthenticateMutation, AuthenticateMutationVariables>;
export declare type AuthenticateComponentProps = Omit<ReactApollo.MutationProps<AuthenticateMutation, AuthenticateMutationVariables>, "mutation">;
export declare const AuthenticateComponent: (props: Pick<ReactApollo.MutationProps<AuthenticateMutation, AuthenticateMutationVariables>, "client" | "ignoreResults" | "optimisticResponse" | "variables" | "refetchQueries" | "awaitRefetchQueries" | "update" | "children" | "onCompleted" | "onError" | "context" | "fetchPolicy">) => JSX.Element;
export declare function useAuthenticateMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>): [ReactApolloHooks.MutationFn<AuthenticateMutation, AuthenticateMutationVariables>, ReactApolloHooks.MutationResult<AuthenticateMutation>];
export declare type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export declare const CurrentPersonDocument: any;
export declare type CurrentPersonComponentProps = Omit<ReactApollo.QueryProps<CurrentPersonQuery, CurrentPersonQueryVariables>, "query">;
export declare const CurrentPersonComponent: (props: Pick<ReactApollo.QueryProps<CurrentPersonQuery, CurrentPersonQueryVariables>, "client" | "variables" | "children" | "onCompleted" | "onError" | "context" | "fetchPolicy" | "errorPolicy" | "displayName" | "skip" | "ssr" | "pollInterval" | "notifyOnNetworkStatusChange" | "partialRefetch" | "returnPartialData">) => JSX.Element;
export declare function useCurrentPersonQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<CurrentPersonQueryVariables>): ReactApolloHooks.QueryHookResult<CurrentPersonQuery, CurrentPersonQueryVariables>;
export declare type CurrentPersonQueryHookResult = ReturnType<typeof useCurrentPersonQuery>;
export declare const RegisterUserDocument: any;
export declare type RegisterUserMutationFn = ReactApollo.MutationFn<RegisterUserMutation, RegisterUserMutationVariables>;
export declare type RegisterUserComponentProps = Omit<ReactApollo.MutationProps<RegisterUserMutation, RegisterUserMutationVariables>, "mutation">;
export declare const RegisterUserComponent: (props: Pick<ReactApollo.MutationProps<RegisterUserMutation, RegisterUserMutationVariables>, "client" | "ignoreResults" | "optimisticResponse" | "variables" | "refetchQueries" | "awaitRefetchQueries" | "update" | "children" | "onCompleted" | "onError" | "context" | "fetchPolicy">) => JSX.Element;
export declare function useRegisterUserMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>): [ReactApolloHooks.MutationFn<RegisterUserMutation, RegisterUserMutationVariables>, ReactApolloHooks.MutationResult<RegisterUserMutation>];
export declare type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export declare const UserTracksDocument: any;
export declare type UserTracksComponentProps = Omit<ReactApollo.QueryProps<UserTracksQuery, UserTracksQueryVariables>, "query"> & ({
    variables: UserTracksQueryVariables;
    skip?: false;
} | {
    skip: true;
});
export declare const UserTracksComponent: (props: UserTracksComponentProps) => JSX.Element;
export declare function useUserTracksQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<UserTracksQueryVariables>): ReactApolloHooks.QueryHookResult<UserTracksQuery, UserTracksQueryVariables>;
export declare type UserTracksQueryHookResult = ReturnType<typeof useUserTracksQuery>;
