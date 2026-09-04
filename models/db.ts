import { DataTypes, Model, Sequelize } from 'sequelize';
import dotenv from "dotenv"
dotenv.config();

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:3306/${process.env.DB_NAME}`);

export default sequelize
