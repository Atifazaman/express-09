const express=require('express')
const productRouter=express.Router()

const productController=require("../controllers/productController")

productRouter.get("/",productController.getProduct)
productRouter.get("/:id",productController.getProductById)
productRouter.post("/",productController.postProduct)

module.exports=productRouter
