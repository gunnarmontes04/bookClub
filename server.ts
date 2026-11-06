import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv"
dotenv.config();
import sequelize from './models/db.ts';
import User from "./routes/User.ts"
import BookRoutes from "./routes/bookRoutes.ts"
import AuthorRoutes from "./routes/authorRoutes.ts" 
const app: Express = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use("/user", User)
app.use("/books", BookRoutes)
app.use("/authors", AuthorRoutes)
sequelize.sync({alter: true}).then(() => app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
}));