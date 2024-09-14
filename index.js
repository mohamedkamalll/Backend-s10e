const express = require("express")
const app = express()

const userRoutes = require("./routes/userRoutes")
const cors = require("cors")


app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
     console.log(req.url,req.method)
     next()
})

app.use(userRoutes)

app.listen(30000,()=>{
     console.log("Server listening on port 30000")
})