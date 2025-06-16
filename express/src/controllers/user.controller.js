const userModel = require("../models/user.model");

const createUser=async (req, res) => {
  try {
    const { name, email } = req.body;
   const createdUser= await userModel.create({name,email}) ;
   await createdUser.save();
    res.json(createdUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


//Read All
const getUser=async (req, res) => {

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
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body)
      res.json(updatedUser);
    }
    catch(err){res.status(400).json({ message: err.message });}

}

//Delete
const deleteUser=async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    //if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}

module.exports={createUser,getUser,getUser1,updateUser,deleteUser}