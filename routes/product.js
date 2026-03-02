const express=require('express')
const productRouter=express.Router()

productRouter.get("/",(req,res)=>{
    res.send(`<h1>Fetching all products</h1>`)
})
productRouter.get("/:id",(req,res)=>{
res.send(`Fetching product with ID: ${req.params.id}`)
})
productRouter.post("/",(req,res)=>{
res.send(`Adding a new product`)
})
module.exports=productRouter