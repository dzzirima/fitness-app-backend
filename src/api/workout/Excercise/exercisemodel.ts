import { DataTypes, Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDbConfig";
import { v4 as uuidv4 } from "uuid";

const Exercise = postgresDdClient.define("exercise", {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  exerciseName: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  reps: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.DOUBLE,
  },
  distance: {
    type: DataTypes.DOUBLE,
  },
  exerciseNotes: {
    type: DataTypes.STRING,
  },
});

export default Exercise;
