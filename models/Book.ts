import { Model, DataTypes } from "sequelize";
import type { InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "./db.ts";

class Book extends Model<InferAttributes<Book>, InferCreationAttributes<Book>> {
    declare id: CreationOptional<number>
    declare title: string
    declare genre: string
    declare pages: number
}

Book.init(
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        pages: DataTypes.INTEGER
    },
    {
        sequelize,
        tableName: "Books"
    }
)

export default Book
