const productService=require("../services/productService")

const getAllProducts=(req,res)=>{
    const response=productService.getAllProductsService
     res.send(response)
}
const getProductById=(req,res)=>{
 const response=productService.getProductByIdService
     res.send(response)
}
const addProduct=(req,res)=>{
 const response=productService.addProductService
     res.send(response)
}

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}
