const authorModel = require("../models/author.model");
const bookModel = require("../models/book.model");



 

const createAuthor=async (req, res) => {
  try {
    const {name}= req.body;
    const createdAuthor= await authorModel.create({name}) ;

   await createdAuthor.save();
    res.json(createdAuthor);
    //console.log(hashpassword);
    
  } catch (err) {
    res.status(400).json({ message: err.message });

  }
}


//Read All
const getAuthor=async (req, res) => {

  try {
    const Author = await authorModel.find();
    res.json(Author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getAuthor1=async (req, res) => {
  try {
    const author = await authorModel.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//Update
 const updateAuthor=async (req, res) =>{
  try {
    const updatedAuthor = await authorModel.findByIdAndUpdate(
      req.params.id,
      req.body)
      res.json(updatedAuthor);
    }
    catch(err){res.status(400).json({ message: err.message });}

}

//Delete
const deleteAuthor=async (req, res) => {
  try {
    const deletedAuthor = await authorModel.findByIdAndDelete(req.params.id);
    //if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Author deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}

module.exports={createAuthor,getAuthor,getAuthor1,updateAuthor,deleteAuthor};