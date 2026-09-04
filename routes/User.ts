import express, {type Request, type Response} from "express"
import UserController from "../controllers/UserController.ts";
const router = express.Router();
import User from "../models/User.ts";
const userController = new UserController()

router.get("/", async (req: Request, res: Response) => {
    const users = await userController.getAllUsers(req, res);

    res.json(users)
    
})
router.get("/:username", async (req: Request, res: Response) => {

    
    const user = await userController.getUser(req, res)
    // const user = await User.findOne({ where: { username: req.params.username}})

    res.json(user)
})



export default router