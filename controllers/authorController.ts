import Author from "../models/author.ts";
import type { Request } from "express";

export default class AuthorController {

    public async getAllAuthors() {
        return await Author.findAll();
    }

    public async postAuthor(req: Request) {
        return await Author.create(req.body)
    }

    public async getAuthorById(req: Request<{authorId: number}>) {
        return await Author.findOne({
            where: {
                id: req.params.authorId
            }
        })
    }

    public async getAuthorBooks(req: Request<{authorId: number}>) {
        const author = await this.getAuthorById(req);
        if (author == null) {
            return []
        }
        return author.getBooks()
    }
}