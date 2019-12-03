export declare const postgraphileOptions: {
    dynamicJson: boolean;
    graphqlRoute: string;
    defaultRole: string;
    appendPlugins: import("graphile-build").Plugin[];
    skipPlugins: import("graphile-build").Plugin[];
    jwtSecret: string;
    exportGqlSchemaPath: string;
    jwtPgTypeIdentifier: string;
};
export declare const dbOptions: {
    user: string;
    pass: string;
    host: string;
    name: string;
    schemas: string[];
};
