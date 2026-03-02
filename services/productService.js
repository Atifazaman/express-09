const getAllProductsService=()=>{
    return `<h1>Fetching all products</h1>`
}
const getProductByIdService=(id)=>{
    return `Fetching product with ID: ${req.params.id}`
}
const addProductService=()=>{
    return `Adding a new product`
}

module.exports={
    getAllProductsService,
    getProductByIdService,
    addProductService
}