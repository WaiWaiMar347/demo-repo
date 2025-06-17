const express = require('express');
const { createAuthor, getAuthor, getAuthor1, updateAuthor, deleteAuthor } = require('../controllers/author.controller');

const authorRouter=express.Router();

authorRouter.post('/',createAuthor);
authorRouter.get('/',getAuthor);
authorRouter.get('/:id',getAuthor1)
authorRouter.put('/:id',updateAuthor);
authorRouter.delete('/:id',deleteAuthor);

module.exports= authorRouter;
