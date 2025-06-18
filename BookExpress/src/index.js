const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book.router');
const authorRouter = require('./routes/author.router');
const categoryRouter = require('./routes/category.router');
var cors = require('cors');
const multer  = require('multer');
const upload = require('./middleware/middleware');
//const upload = multer({ dest: 'uploads/' })

const app = express();
const port=5000;

// let  Users= [
//   {name: 'wai wai mar',email:"wwm@gamil.com"},
//   {name: 'khaing mar',email:"kkm@gamil.com" }
// ];
app.use('/uploads', express.static('uploads'));

app.use(cors())
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Single file upload
app.post('/upload', (req, res) => {
  console.log(req.body, "req.body");
  console.log(req.file, "req.file");

  //const imgUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  res.json({
    message: 'File uploaded successfully!',
   // filename: req.file
  });
});


mongoose.connect('mongodb://127.0.0.1:27017/Book')
.then(()=>console.log("Db connection Successful"))
.catch((error)=>console.log(error.message));


app.use('/book',bookRouter);
app.use('/author',authorRouter);
app.use('/category',categoryRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



