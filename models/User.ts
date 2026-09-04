import sequelize from "./db.ts";
import { Model, DataTypes } from "sequelize";
import type {
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
} from "sequelize"

class User extends Model <InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>
    declare username: string
    declare password: string
} 

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        tableName: "users"
    }

)

export default User
