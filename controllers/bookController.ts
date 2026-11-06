import Book from "../models/Book.ts";
import type { Request } from "express";
export default class BookController {

    public async getAllBooks() {
        
        return await Book.findAll();
    }

    public async postBook(req: Request) {
        return await Book.create(req.body)
    }
    
    public async getBookById(req: Request<{bookId: number}>) {
        return await Book.findAll({
            where: {
                id: req.params.bookId
            }
        })
    }
}