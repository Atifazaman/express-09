const express=require('express')
const userRouter=express.Router()

const userController=require('../controllers/userController')

userRouter.get("/",userController.getAllUsers)
userRouter.get("/:id",userController.getUserById)
userRouter.post("/",userController.addUser)

module.exports=userRouter
