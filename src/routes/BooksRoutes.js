import express from 'express';
import BookController from './../controllers/booksController.js';

const router = express.Router();

router 
    .get("/api/book", BookController.listBooks)
    .get("/api/book/:id", BookController.ListBookById)
    .post("/api/book", BookController.createBook)
    .put("/api/book/:id", BookController.updateBook)
    .delete("/api/book/:id", BookController.deleteBook);

export default router;
