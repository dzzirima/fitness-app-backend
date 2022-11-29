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
const postgresDdClient = new sequelize_1.Sequelize("postgres", "postgres", "chicken123", {
    host: "fittness.cj2glqaazokx.us-east-1.rds.amazonaws.com",
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
