const express = require('express');
const { createBook, getBook, getBook1, updateBook, deleteBook } = require('../controllers/book.controller');


const bookRouter=express.Router();

bookRouter.post('/',createBook);
bookRouter.get('/',getBook);
bookRouter.get('/:id',getBook1)
bookRouter.put('/:id',updateBook);
bookRouter.delete('/:id',deleteBook);

module.exports= bookRouter;
