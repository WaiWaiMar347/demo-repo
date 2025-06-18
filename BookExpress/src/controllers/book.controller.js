const bookModel = require("../models/book.model");

const createBook= async (req, res) => {
  try {
    // console.log(req.body, "req.body");
    // console.log(req.file)
    const { title, author,category } = req.body;
     const protocol = req.protocol;               // 'http' or 'https'
      const host = req.get('host');                 // e.g., 'localhost:3000'
          // e.g., '/some-route?query=123'

  const fullUrl = `${protocol}://${host}`;

  console.log(fullUrl , "server url"); // Full URL client requested
    const imgUrl = `${fullUrl}/uploads/${req.file.filename}`;
    console.log(imgUrl, "imgUrl <<<<<<<<<");
   const createdBook= await bookModel.create({title,author,category , imgUrl}) ;
  //const createdBook= await bookModel.create({title,author,category }) ;
   await createdBook.save();
    res.json(createdBook);
    //console.log(hashpassword);
    
  } catch (err) {
    res.status(400).json({ message: err.message });

  }
}


//Read All
const getBook=async (req, res) => {

  try {
    const Book = await bookModel.find({}).populate('author').populate('category');
    res.json(Book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getBook1=async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//Update
 const updateBook=async (req, res) =>{
  try {
    const { title, author,category } = req.body;
    
    const updatedBook = await userModel.findByIdAndUpdate(
      req.params.id,
      {title,author,category})
      res.json(updatedBook);
    }
    catch(err){res.status(400).json({ message: err.message });}

}

//Delete
const deleteBook=async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    //if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: ' Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}

module.exports={createBook,getBook,getBook1,updateBook,deleteBook}