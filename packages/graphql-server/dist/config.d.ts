export declare const postgraphileOptions: {
    dynamicJson: boolean;
    graphiql: boolean;
    graphqlRoute: string;
    defaultRole: string;
    appendPlugins: import("graphile-build").Plugin[];
    jwtSecret: string | undefined;
    exportGqlSchemaPath: string;
    jwtPgTypeIdentifier: string;
};
export declare const dbOptions: {
    user: string | undefined;
    pass: string | undefined;
    host: string | undefined;
    name: string | undefined;
    schemas: string[];
};
