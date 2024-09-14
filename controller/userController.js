const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017",{
     dbName:"usersTask"
})
.then(()=>{
     console.log("mongo connected")
}).catch((err)=>{
     console.log(err)
})

const usersSchema = mongoose.Schema({
     name:String,
     age:Number,
     city:String,
     edu:String,
     id:Number
})

const User = mongoose.model("User",usersSchema)



const getUsers = async (req,res)=>{
     const usersData = await User.find()
     console.log(usersData)
     console.log(req.url,req.method)
     res.json(usersData)
}
const addUser = (req,res)=>{
     console.log("addUser called")
     console.log(req.body)
    // Data.push(req.body)
    let user = new User(req.body)
    user.save() 
    res.send("added")
}
const deleteUser = (req,res)=>{
     console.log(req.body)
     const {userId} = req.body
     Data = Data.filter(user=> user.id != userId)
     res.send("deleted")
}

module.exports ={getUsers,addUser,deleteUser}