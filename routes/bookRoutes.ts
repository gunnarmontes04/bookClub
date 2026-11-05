import express, { type Request, type Response, type NextFunction } from "express";
import BookController from "../controllers/bookController.ts";

const controller = new BookController();
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const books =  await controller.getAllBooks();
    res.json(books)
})

router.post("/", async (req: Request, res: Response) => {
    const book = await controller.postBook(req);
    res.json(book)
})

router.get("/:bookId", async (req: Request<{bookId: number}>, res: Response) => {
    const book = await controller.getBookById(req);
    res.json(book)
})
export default router