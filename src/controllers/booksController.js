import Books from './../models/Book.js';

class BookController {

    static listBooks = (req, res ) => {
        Books
        .find()
        .then((books) => { res.status(200).json(books) })
        .catch((err) => {res.status(500).send({message: `Falha ao Listar Livros ${err.message}`})});
    };

    static ListBookById = (req, res) => {
        Books
        .findById(req.params.id)        
        .then((book) => { 
            if (!book) {
                res.status(404).send({message: `Livro Não Localizado: ${book}`})
            } else
            res.status(200).json(book) })
        .catch((err) => {res.status(400).send({message: `Falha ao Localizar Livro ${err.message}`})});
    }

    static createBook = (req, res) => {
        const book = new Books(req.body);
        book
        .save()
        .then((book) => { res.status(201).json(book) })
        .catch((err) => {res.status(400).send({message: `Falha ao Criar Um Livro ${err.message}`})});
    }

    static updateBook = (req, res) => {
        const book = new Books(req.body);
        Books
        .findByIdAndUpdate(req.params.id, book)
        .then((book) => { res.status(200).json(book) })
        .catch((err) => {res.status(400).send({message: `Falha ao Atualizar Livro ${err.message}`})});
    }
    
    static deleteBook = (req, res) => {
        Books
        .findByIdAndDelete(req.params.id)
        .then((book) => { res.status(200).json(book) })
        .catch((err) => {res.status(400).send({message: `Falha ao Deletar Livro ${err.message}`})});
    }

}

export default BookController;

