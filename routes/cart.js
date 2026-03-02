const express=require('express')
const cartRouter=express.Router()
const cartController=require("../controllers/cartController")

cartRouter.get("/:id",cartController.getCartForUser)
cartRouter.post("/:id",cartController.addProductToCart)

module.exports=cartRouter
