import express, { type Express, type Request, type Response } from 'express';
import sequelize from './models/db.ts';
import User from "./routes/User.ts"
import UserModel from './models/User.ts';

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
 
connectToDatabase();
 
const app: Express = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use("/user", User)
sequelize.sync().then(() => app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
}));