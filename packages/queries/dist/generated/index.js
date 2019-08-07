"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
var ReactApollo = require("react-apollo");
var React = require("react");
var ReactApolloHooks = require("react-apollo-hooks");
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
exports.AuthenticateDocument = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation authenticate($email: String!, $password: String!) {\n    authenticate(input: { email: $email, password: $password }) {\n      jwtToken\n    }\n  }\n"], ["\n  mutation authenticate($email: String!, $password: String!) {\n    authenticate(input: { email: $email, password: $password }) {\n      jwtToken\n    }\n  }\n"])));
exports.AuthenticateComponent = function (props) { return (React.createElement(ReactApollo.Mutation, __assign({ mutation: exports.AuthenticateDocument }, props))); };
function useAuthenticateMutation(baseOptions) {
    return ReactApolloHooks.useMutation(exports.AuthenticateDocument, baseOptions);
}
exports.useAuthenticateMutation = useAuthenticateMutation;
exports.CurrentPersonDocument = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query currentPerson {\n    currentPerson {\n      fullName\n      firstName\n      lastName\n      about\n      createdAt\n      updatedAt\n    }\n  }\n"], ["\n  query currentPerson {\n    currentPerson {\n      fullName\n      firstName\n      lastName\n      about\n      createdAt\n      updatedAt\n    }\n  }\n"])));
exports.CurrentPersonComponent = function (props) { return (React.createElement(ReactApollo.Query, __assign({ query: exports.CurrentPersonDocument }, props))); };
function useCurrentPersonQuery(baseOptions) {
    return ReactApolloHooks.useQuery(exports.CurrentPersonDocument, baseOptions);
}
exports.useCurrentPersonQuery = useCurrentPersonQuery;
exports.RegisterUserDocument = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation registerUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    registerPerson(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      person {\n        id\n        fullName\n        firstName\n        lastName\n        about\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"], ["\n  mutation registerUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    registerPerson(\n      input: {\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n      }\n    ) {\n      person {\n        id\n        fullName\n        firstName\n        lastName\n        about\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"])));
exports.RegisterUserComponent = function (props) { return (React.createElement(ReactApollo.Mutation, __assign({ mutation: exports.RegisterUserDocument }, props))); };
function useRegisterUserMutation(baseOptions) {
    return ReactApolloHooks.useMutation(exports.RegisterUserDocument, baseOptions);
}
exports.useRegisterUserMutation = useRegisterUserMutation;
var templateObject_1, templateObject_2, templateObject_3;
