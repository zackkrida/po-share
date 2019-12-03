"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const React = require("react");
const ApolloReactComponents = require("@apollo/react-components");
const ApolloReactHooks = require("@apollo/react-hooks");
/** Methods to use when ordering `Person`. */
var PeopleOrderBy;
(function (PeopleOrderBy) {
    PeopleOrderBy["Natural"] = "NATURAL";
    PeopleOrderBy["IdAsc"] = "ID_ASC";
    PeopleOrderBy["IdDesc"] = "ID_DESC";
    PeopleOrderBy["FirstNameAsc"] = "FIRST_NAME_ASC";
    PeopleOrderBy["FirstNameDesc"] = "FIRST_NAME_DESC";
    PeopleOrderBy["LastNameAsc"] = "LAST_NAME_ASC";
    PeopleOrderBy["LastNameDesc"] = "LAST_NAME_DESC";
    PeopleOrderBy["AboutAsc"] = "ABOUT_ASC";
    PeopleOrderBy["AboutDesc"] = "ABOUT_DESC";
    PeopleOrderBy["CreatedAtAsc"] = "CREATED_AT_ASC";
    PeopleOrderBy["CreatedAtDesc"] = "CREATED_AT_DESC";
    PeopleOrderBy["UpdatedAtAsc"] = "UPDATED_AT_ASC";
    PeopleOrderBy["UpdatedAtDesc"] = "UPDATED_AT_DESC";
    PeopleOrderBy["UsernameAsc"] = "USERNAME_ASC";
    PeopleOrderBy["UsernameDesc"] = "USERNAME_DESC";
    PeopleOrderBy["SlugAsc"] = "SLUG_ASC";
    PeopleOrderBy["SlugDesc"] = "SLUG_DESC";
    PeopleOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PeopleOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(PeopleOrderBy = exports.PeopleOrderBy || (exports.PeopleOrderBy = {}));
/** Methods to use when ordering `PersonAccount`. */
var PersonAccountsOrderBy;
(function (PersonAccountsOrderBy) {
    PersonAccountsOrderBy["Natural"] = "NATURAL";
    PersonAccountsOrderBy["PersonIdAsc"] = "PERSON_ID_ASC";
    PersonAccountsOrderBy["PersonIdDesc"] = "PERSON_ID_DESC";
    PersonAccountsOrderBy["EmailAsc"] = "EMAIL_ASC";
    PersonAccountsOrderBy["EmailDesc"] = "EMAIL_DESC";
    PersonAccountsOrderBy["PasswordHashAsc"] = "PASSWORD_HASH_ASC";
    PersonAccountsOrderBy["PasswordHashDesc"] = "PASSWORD_HASH_DESC";
    PersonAccountsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PersonAccountsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(PersonAccountsOrderBy = exports.PersonAccountsOrderBy || (exports.PersonAccountsOrderBy = {}));
/** Methods to use when ordering `TrackSearch`. */
var TrackSearchesOrderBy;
(function (TrackSearchesOrderBy) {
    TrackSearchesOrderBy["Natural"] = "NATURAL";
    TrackSearchesOrderBy["SearchableIdAsc"] = "SEARCHABLE_ID_ASC";
    TrackSearchesOrderBy["SearchableIdDesc"] = "SEARCHABLE_ID_DESC";
    TrackSearchesOrderBy["PrettyAsc"] = "PRETTY_ASC";
    TrackSearchesOrderBy["PrettyDesc"] = "PRETTY_DESC";
    TrackSearchesOrderBy["SearchableTypeAsc"] = "SEARCHABLE_TYPE_ASC";
    TrackSearchesOrderBy["SearchableTypeDesc"] = "SEARCHABLE_TYPE_DESC";
    TrackSearchesOrderBy["TermAsc"] = "TERM_ASC";
    TrackSearchesOrderBy["TermDesc"] = "TERM_DESC";
})(TrackSearchesOrderBy = exports.TrackSearchesOrderBy || (exports.TrackSearchesOrderBy = {}));
/** Methods to use when ordering `Track`. */
var TracksOrderBy;
(function (TracksOrderBy) {
    TracksOrderBy["Natural"] = "NATURAL";
    TracksOrderBy["IdAsc"] = "ID_ASC";
    TracksOrderBy["IdDesc"] = "ID_DESC";
    TracksOrderBy["PersonIdAsc"] = "PERSON_ID_ASC";
    TracksOrderBy["PersonIdDesc"] = "PERSON_ID_DESC";
    TracksOrderBy["NameAsc"] = "NAME_ASC";
    TracksOrderBy["NameDesc"] = "NAME_DESC";
    TracksOrderBy["ImageAsc"] = "IMAGE_ASC";
    TracksOrderBy["ImageDesc"] = "IMAGE_DESC";
    TracksOrderBy["FileAsc"] = "FILE_ASC";
    TracksOrderBy["FileDesc"] = "FILE_DESC";
    TracksOrderBy["PublicAsc"] = "PUBLIC_ASC";
    TracksOrderBy["PublicDesc"] = "PUBLIC_DESC";
    TracksOrderBy["CreatedAtAsc"] = "CREATED_AT_ASC";
    TracksOrderBy["CreatedAtDesc"] = "CREATED_AT_DESC";
    TracksOrderBy["UpdatedAtAsc"] = "UPDATED_AT_ASC";
    TracksOrderBy["UpdatedAtDesc"] = "UPDATED_AT_DESC";
    TracksOrderBy["PublishedAtAsc"] = "PUBLISHED_AT_ASC";
    TracksOrderBy["PublishedAtDesc"] = "PUBLISHED_AT_DESC";
    TracksOrderBy["DeletedAtAsc"] = "DELETED_AT_ASC";
    TracksOrderBy["DeletedAtDesc"] = "DELETED_AT_DESC";
    TracksOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    TracksOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(TracksOrderBy = exports.TracksOrderBy || (exports.TracksOrderBy = {}));
exports.AuthenticateDocument = graphql_tag_1.default `
    mutation authenticate($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    jwtToken
  }
}
    `;
exports.AuthenticateComponent = (props) => (React.createElement(ApolloReactComponents.Mutation, Object.assign({ mutation: exports.AuthenticateDocument }, props)));
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
function useAuthenticateMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.AuthenticateDocument, baseOptions);
}
exports.useAuthenticateMutation = useAuthenticateMutation;
exports.CurrentPersonDocument = graphql_tag_1.default `
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
exports.CurrentPersonComponent = (props) => (React.createElement(ApolloReactComponents.Query, Object.assign({ query: exports.CurrentPersonDocument }, props)));
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
function useCurrentPersonQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.CurrentPersonDocument, baseOptions);
}
exports.useCurrentPersonQuery = useCurrentPersonQuery;
function useCurrentPersonLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.CurrentPersonDocument, baseOptions);
}
exports.useCurrentPersonLazyQuery = useCurrentPersonLazyQuery;
exports.RegisterUserDocument = graphql_tag_1.default `
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
exports.RegisterUserComponent = (props) => (React.createElement(ApolloReactComponents.Mutation, Object.assign({ mutation: exports.RegisterUserDocument }, props)));
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
 *      input: // value for 'input'
 *   },
 * });
 */
function useRegisterUserMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.RegisterUserDocument, baseOptions);
}
exports.useRegisterUserMutation = useRegisterUserMutation;
exports.PersonByUsernameDocument = graphql_tag_1.default `
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
    `;
exports.PersonByUsernameComponent = (props) => (React.createElement(ApolloReactComponents.Query, Object.assign({ query: exports.PersonByUsernameDocument }, props)));
/**
 * __usePersonByUsernameQuery__
 *
 * To run a query within a React component, call `usePersonByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
function usePersonByUsernameQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.PersonByUsernameDocument, baseOptions);
}
exports.usePersonByUsernameQuery = usePersonByUsernameQuery;
function usePersonByUsernameLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.PersonByUsernameDocument, baseOptions);
}
exports.usePersonByUsernameLazyQuery = usePersonByUsernameLazyQuery;
exports.PersonBySlugDocument = graphql_tag_1.default `
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
    `;
exports.PersonBySlugComponent = (props) => (React.createElement(ApolloReactComponents.Query, Object.assign({ query: exports.PersonBySlugDocument }, props)));
/**
 * __usePersonBySlugQuery__
 *
 * To run a query within a React component, call `usePersonBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
function usePersonBySlugQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.PersonBySlugDocument, baseOptions);
}
exports.usePersonBySlugQuery = usePersonBySlugQuery;
function usePersonBySlugLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.PersonBySlugDocument, baseOptions);
}
exports.usePersonBySlugLazyQuery = usePersonBySlugLazyQuery;
exports.TrackDocument = graphql_tag_1.default `
    query track($id: UUID!) {
  track(id: $id) {
    name
    file
    createdAt
    person {
      id
      username
    }
  }
}
    `;
exports.TrackComponent = (props) => (React.createElement(ApolloReactComponents.Query, Object.assign({ query: exports.TrackDocument }, props)));
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
function useTrackQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.TrackDocument, baseOptions);
}
exports.useTrackQuery = useTrackQuery;
function useTrackLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.TrackDocument, baseOptions);
}
exports.useTrackLazyQuery = useTrackLazyQuery;
exports.UserTracksDocument = graphql_tag_1.default `
    query userTracks($userId: UUID!) {
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
exports.UserTracksComponent = (props) => (React.createElement(ApolloReactComponents.Query, Object.assign({ query: exports.UserTracksDocument }, props)));
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
function useUserTracksQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.UserTracksDocument, baseOptions);
}
exports.useUserTracksQuery = useUserTracksQuery;
function useUserTracksLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.UserTracksDocument, baseOptions);
}
exports.useUserTracksLazyQuery = useUserTracksLazyQuery;
exports.SearchTracksDocument = graphql_tag_1.default `
    query searchTracks($term: String) {
  search(search: $term) {
    totalCount
    nodes {
      searchableId
      searchableType
      term
      pretty
    }
  }
}
    `;
exports.SearchTracksComponent = (props) => (React.createElement(ApolloReactComponents.Query, Object.assign({ query: exports.SearchTracksDocument }, props)));
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
function useSearchTracksQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.SearchTracksDocument, baseOptions);
}
exports.useSearchTracksQuery = useSearchTracksQuery;
function useSearchTracksLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.SearchTracksDocument, baseOptions);
}
exports.useSearchTracksLazyQuery = useSearchTracksLazyQuery;
