const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();


 const userLogin= async (req, res) => {
  const { email,password } = req.body;

  const user = await userModel.findOne({email});

  if (!user) return res.status(401).json({ message: 'Invalid user' });

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) return res.status(401).json({ message: 'Invalid credential' });

  const token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRECT_KEY, {
    expiresIn: '2h'
  });

  res.json({ token });
  console.log(token);
  
}

const createUser=async (req, res) => {
  try {
    const { name, email,password } = req.body;
    const hashpassword= bcrypt.hashSync(password, 8)
   const createdUser= await userModel.create({name,email,
      password: hashpassword
   }) ;

   await createdUser.save();
    res.json(createdUser);
    //console.log(hashpassword);
    
  } catch (err) {
    res.status(400).json({ message: err.message });

  }
}


//Read All
const getUser=async (req, res) => {
console.log(req.user)
  try {
    const Users = await userModel.find();
    res.json(Users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getUser1=async (req, res) => {
  try {
    const book = await userModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'User not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//Update
 const updateUser=async (req, res) =>{
  try {
    const { name, email,password } = req.body;
    const hashpassword= bcrypt.hashSync(password, 8)
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {name,email,password: hashpassword})
      res.json(updatedUser);
    }
    catch(err){res.status(400).json({ message: err.message });}

}

//Delete
const deleteUser=async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    //if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}

module.exports={createUser,getUser,getUser1,updateUser,deleteUser,userLogin}