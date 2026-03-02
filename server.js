const express=require('express')
const app=express()
const userRouter=require("./routes/user")
const productRouter=require("./routes/product")
const cartRouter=require("./routes/cart")

app.use("/users",userRouter)
app.use("/products",productRouter)
app.use("/cart",cartRouter)
app.use((req,res)=>{
    res.status(404).send(`<h1>Page Not Found</h1>`)
})

app.listen(3000,()=>{
    console.log("Server is running on https://localhost:3000")
})