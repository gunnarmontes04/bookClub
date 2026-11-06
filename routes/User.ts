import express, {type Request, type Response} from "express"
import UserController from "../controllers/UserController.ts";
const router = express.Router();
const userController = new UserController()

router.get("/", async (req: Request, res: Response) => {
    const users = await userController.getAllUsers(req, res);

    res.json(users)
    
})
router.get("/:username", async (req: Request, res: Response) => {

    
    const user = await userController.getUser(req, res)

    res.json(user)
})



export default router