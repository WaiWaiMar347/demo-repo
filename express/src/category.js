const express=require('express');
const mongoose = require('mongoose');
const categoryRouter = require('./routes/category.router');


const app = express();
const port=3500;

app.use(express.json());
app.use('/categories',categoryRouter)

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>console.log("Db connection Successful"))
.catch((error)=>console.log(error.message));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
