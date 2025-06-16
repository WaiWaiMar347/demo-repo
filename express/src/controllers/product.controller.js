const productModel = require("../models/product.model");
//const productRouter = require("../routes/product.router");
//const Category = require("../models/category.model");


const createProduct=async (req, res) => {
  
  try {
    const { name, category, price, quantity, description} = req.body;
    const createdProduct= await productModel.create(req.body) ;
    //await createdProduct.save();
    res.json(createdProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
const getProduct=async (req,res) => {
    try {
  const products = await productModel.find({ price:30000 },'name price');
  res.json(products);
  console.log(products);
} catch (err) {
  console.error('Error executing query:', err);
}
}

const getProduct1=async (req, res) => {
  try {
    const  product= await productModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//Update
 const updateProduct=async (req, res) =>{
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body)
      res.json(updatedProduct);
    }
    catch(err){res.status(400).json({ message: err.message });}

}
const deleteProduct=async (req,res) => {
    try{
        const deletedProduct=await productModel.findByIdAndDelete(req.params.id)
        res.json({message:"Product is deleted"})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
module.exports={createProduct,getProduct,getProduct1,updateProduct,deleteProduct}