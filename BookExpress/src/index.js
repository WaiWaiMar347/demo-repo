const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book.router');
const authorRouter = require('./routes/author.router');
const categoryRouter = require('./routes/category.router');
var cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();
const port=5000;

// let  Users= [
//   {name: 'wai wai mar',email:"wwm@gamil.com"},
//   {name: 'khaing mar',email:"kkm@gamil.com" }
// ];
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save to 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
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



