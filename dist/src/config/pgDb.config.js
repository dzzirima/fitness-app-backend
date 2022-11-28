"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// let postgresDdClient = new Sequelize(
//   "fitness_db",
//   process.env.DB_USER!,
//   process.env.DB_PASSWORD,
//   {
//     host: "localhost",
//     dialect: "postgres",
//     logging: false,
//   }
// );
const postgresDdClient = new sequelize_1.Sequelize(process.env.POSTGRESQL_DB, process.env.POSTGRESQL_DB_USER, process.env.POSTGRESQL_DB_PASSWORD, {
    host: process.env.POSTGRESQL_DB_HOST,
    dialect: "postgres",
    logging: false,
    // declaring pool is optional
    // pool: {
    //   max: dbConfig.pool.max,
    //   min: dbConfig.pool.min,
    //   acquire: dbConfig.pool.acquire,
    //   idle: dbConfig.pool.idle
    // }
});
exports.default = postgresDdClient;
