import express, {type Request, type Response} from "express"

const router = express.Router();
import sequelize from "../models/db.ts";


router.get("/:username", (req: Request, res: Response) => {
    console.log(sequelize.model("User"))
    console.log(JSON.stringify(sequelize.model("User").findOne({where: {username: req.params.username}})))
    console.log(req.params.username)
})

export default router