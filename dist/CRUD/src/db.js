"use strict";
// Подключаем базу данных.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = __importDefault(require("pg"));
var Pool = pg_1["default"].Pool;
var pool = new Pool({
    user: 'habrpguser',
    password: 'pgpwd4habr',
    host: "localhost",
    port: -"5432:5432",
    database: "kino"
});
exports["default"] = pool;
//# sourceMappingURL=db.js.map