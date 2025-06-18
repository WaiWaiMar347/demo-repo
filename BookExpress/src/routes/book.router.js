const express = require('express');
const { createBook, getBook, getBook1, updateBook, deleteBook } = require('../controllers/book.controller');
const upload = require('../middleware/middleware');


const bookRouter=express.Router();

bookRouter.post('/', 
    upload.single('myFile'),
    createBook);
bookRouter.get('/',getBook);
bookRouter.get('/:id',getBook1)
bookRouter.put('/:id',updateBook);
bookRouter.delete('/:id',deleteBook);

module.exports= bookRouter;
