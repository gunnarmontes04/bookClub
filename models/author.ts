import { Model, DataTypes } from "sequelize";
import type { InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, Association, HasManyGetAssociationsMixin } from "sequelize";
import sequelize from "./db.ts";
import type { number } from "zod";
import type Book from "./Book.ts";

class Author extends Model<InferAttributes<Author, { omit: 'books' }>, InferCreationAttributes<Author, { omit: 'books' }>> {
    declare id: CreationOptional<number>
    declare first_name: string
    declare birth_year:  number


    declare books?: NonAttribute<Book[]>
    declare getBooks: HasManyGetAssociationsMixin<Book>

    declare static associations: {
        books: Association<Author, Book>;
    };
}

Author.init(
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        first_name: DataTypes.STRING,
        birth_year: DataTypes.INTEGER
    },
    {
        sequelize,
        tableName: "authors",
        timestamps: false
    }
)

export default Author
