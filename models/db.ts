import { DataTypes, Model, Sequelize } from 'sequelize';
import User from "../models/User.ts"
const sequelize = new Sequelize(`mysql://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:3306/${process.env.DATABASE}`);

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

async function syncDb () {
    await sequelize.sync({force: true})
    console.log(sequelize.model("User"))
}

async function createTestUsers() {
    try {

        const user1 = await User.create({username: "user1", password: "auth not implemented"})
        const USer2 = await User.create({username: "user2", password: "auth not implemented"})
        const USer3 = await User.create({username: "user3", password: "auth not implemented"})
    } catch (e) {
        console.error("Error creating test users "  + e)
    }

}
(async () => {
    await syncDb()
    await createTestUsers()

})();

export default sequelize
