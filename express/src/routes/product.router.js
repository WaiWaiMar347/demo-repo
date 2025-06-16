const express=require('express');
const { createProduct, getProduct, getProduct1, updateProduct, deleteProduct } = require('../controllers/product.controller');


const productRouter=express.Router();

productRouter.post('/',createProduct);
productRouter.get('/',getProduct);
productRouter.get('/:id',getProduct1);
productRouter.put('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;

