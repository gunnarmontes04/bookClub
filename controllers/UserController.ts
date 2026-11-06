import User from "../models/User.ts";
import { type Request, type Response } from "express";



export default class UserController {

  
    public async getAllUsers(req: Request, res: Response): Promise<User[]> {
        const users = await User.findAll()

        return users
    }
    
    public async getUser(req: Request, res: Response): Promise<User | null> {
        const user = await User.findOne({ where: { username: req.params.username}})

        
        return user
    }


}
