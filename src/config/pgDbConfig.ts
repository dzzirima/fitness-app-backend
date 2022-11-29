import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { Sequelize } from "sequelize";

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

const postgresDdClient = new Sequelize(
  "postgres",
  "postgres",
  "chicken123",
  {
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
  }
);

export default postgresDdClient;
