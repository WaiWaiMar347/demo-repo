const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product.router');

const app = express();
const port=2500;

app.use(express.json());
app.use(bodyParser.json());





mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>console.log("Db connection Successful"))
.catch((error)=>console.log(error.message));

app.use('/products',productRouter);
//console.log(products);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
