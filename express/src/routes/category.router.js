const express=require('express');
const { createCategory, getCategory, getCategory1, updateCategory, deleteCategory } = require('../controllers/category.controller');

const categoryRouter=express.Router();

categoryRouter.post('/',createCategory);
categoryRouter.get('/',getCategory);
categoryRouter.get('/:id',getCategory1);
categoryRouter.put('/:id',updateCategory);
categoryRouter.delete('/:id',deleteCategory);

module.exports=categoryRouter;

