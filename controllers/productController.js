const getProduct=(req,res)=>{
     res.send(`<h1>Fetching all products</h1>`)
}
const getProductById=(req,res)=>{
res.send(`Fetching product with ID: ${req.params.id}`)
}
const postProduct=(req,res)=>{
res.send(`Adding a new product`)
}
module.exports={
    getProduct,
    getProductById,
    postProduct
}