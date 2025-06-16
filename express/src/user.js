const express = require('express');
const User=require('./models/user.model')
const mongoose = require('mongoose');
const userRouter = require('./routes/user.router');
const bodyParser = require('body-parser');

const app = express();
const port=1500;

// let  Users= [
//   {name: 'wai wai mar',email:"wwm@gamil.com"},
//   {name: 'khaing mar',email:"kkm@gamil.com" }
// ];
app.use(express.json())
app.use(bodyParser.json());




mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>console.log("Db connection Successful"))
.catch((error)=>console.log(error.message));

app.use('/users',userRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



