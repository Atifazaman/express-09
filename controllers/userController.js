const getAllUsers=(req,res)=>{
     res.send(`<h1>Fetching all users</h1>`)
}
const getUserById=(req,res)=>{
res.send(`Fetching user with ID: ${req.params.id}`)
}
const addUser=(req,res)=>{
res.send(`Adding a new user`)
}
module.exports={
    getAllUsers,
    getUserById,
    addUser,
}