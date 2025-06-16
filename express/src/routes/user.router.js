const express = require('express');
const { getUser, getUser1, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

const userRouter=express.Router();

userRouter.post('/',createUser);
userRouter.get('/',getUser);
userRouter.get('/:id',getUser1);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);

module.exports= userRouter;
