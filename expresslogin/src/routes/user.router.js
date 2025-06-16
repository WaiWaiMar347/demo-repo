const express = require('express');
const { getUser, getUser1, createUser, updateUser, deleteUser, userLogin } = require('../controllers/user.controller');
const middlware = require('../middleware/middleware');
const userRouter=express.Router();

userRouter.post('/',createUser);
userRouter.post('/login',userLogin)
userRouter.get('/', middlware,getUser);
userRouter.get('/:id', middlware,getUser1);
userRouter.put('/:id', middlware,updateUser);
userRouter.delete('/:id', middlware,deleteUser);

module.exports= userRouter;
