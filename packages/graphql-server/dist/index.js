"use strict";
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
var postgraphile_1 = require("postgraphile");
var config_1 = require("./config");
// @TODO: now builder to write postgraphile cache
exports.default = postgraphile_1.postgraphile("postgres://" + config_1.dbOptions.user + ":" + config_1.dbOptions.pass + "@" + config_1.dbOptions.host + "/" + config_1.dbOptions.name, config_1.dbOptions.schemas, __assign({}, config_1.postgraphileOptions, { readCache: __dirname + "/postgraphile.cache" }));
