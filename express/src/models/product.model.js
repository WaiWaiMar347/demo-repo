const  mongoose = require('mongoose');
//const Category = require('./models/Category');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: {type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'},  // references the Category model
  
});

module.exports = mongoose.model('Product',productSchema);