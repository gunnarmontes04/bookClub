import express, { type Request, type Response, type NextFunction} from "express";
import AuthorController from "../controllers/authorController.ts";

const controller = new AuthorController();
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await controller.getAllAuthors());
})

router.post("/", async (req: Request, res: Response) => {
    res.json(await controller.postAuthor(req));
})

router.get("/:authorId", async (req: Request<{authorId: number}>, res: Response) => {
    res.json(await controller.getAuthorById(req))
})

router.get("/:authorId/books", async (req: Request<{authorId: number}>, res: Response) => {
    res.json(await controller.getAuthorBooks(req))
})
export default router;