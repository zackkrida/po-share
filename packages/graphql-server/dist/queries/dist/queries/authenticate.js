"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.AUTHENTICATE = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation authenticate($email: String!, $password: String!) {\n    authenticate(input: { email: $email, password: $password }) {\n      jwtToken\n    }\n  }\n"], ["\n  mutation authenticate($email: String!, $password: String!) {\n    authenticate(input: { email: $email, password: $password }) {\n      jwtToken\n    }\n  }\n"])));
var templateObject_1;
