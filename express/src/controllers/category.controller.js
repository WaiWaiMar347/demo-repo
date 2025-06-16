const categoryModel = require("../models/category.model");


const createCategory=async (req, res) => {
  try {
    const { name } = req.body;
   const createdCategory= await categoryModel.create(req.body) ;
   await createdCategory.save();
    res.json(createdCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
const getCategory=async (req,res) => {
    try{
        const categories=await categoryModel.find();
        res.json(categories);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const getCategory1=async (req, res) => {
  try {
    const  category=await categoryModel.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//Update
 const updateCategory=async (req, res) =>{
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body)
      res.json(updatedCategory);
    }
    catch(err){res.status(400).json({ message: err.message });}

}
const deleteCategory=async (req,res) => {
    try{
        const deletedCategory=await categoryModel.findByIdAndDelete(req.params.id)
        res.json({message:"Category is deleted"})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
module.exports={createCategory,getCategory,getCategory1,updateCategory,deleteCategory};