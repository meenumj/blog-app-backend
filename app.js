const express = require("express")
const mongoose = require("mongoose")
const cors= require("cors")
const userRouter=require("./Controllers/UserRouter")
const postRouter=require("./Controllers/PostRouter")

const app = express()

app.use(express.json())
app.use(cors())


app.use("/api/blog",userRouter)
app.use("/api/post",postRouter)

mongoose.connect("mongodb+srv://meenumj:meenumj167@cluster0.uobnjw6.mongodb.net/blogDb?retryWrites=true&w=majority",
 {useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})