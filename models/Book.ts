import { Model, DataTypes } from "sequelize";
import type { InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from "sequelize";
import sequelize from "./db.ts";
import Author from "./author.ts";

class Book extends Model<InferAttributes<Book>, InferCreationAttributes<Book>> {
    declare id: CreationOptional<number>
    declare title: string
    declare genre: string
    declare pages: number

    declare authorId: ForeignKey<Author["id"]>
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
        tableName: "books",
        timestamps: false
    }
)

Author.hasMany(Book, {
    sourceKey: "id",
    foreignKey: "authorId",
    as: "books"
});

export default Book
