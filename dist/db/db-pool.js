"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dbPool = new pg_1.Pool({
    user: "postgres",
    password: "wiktor12345",
    host: "localhost",
    port: 5432,
    database: "shopping_list"
});
exports.default = dbPool;
