const express=require('express')
const userRouter=express.Router()

userRouter.get("/",(req,res)=>{
    res.send(`<h1>Fetching all users</h1>`)
})
userRouter.get("/:id",(req,res)=>{
res.send(`Fetching user with ID: ${req.params.id}`)
})
userRouter.post("/",(req,res)=>{
res.send(`Adding a new user`)
})

module.exports=userRouter