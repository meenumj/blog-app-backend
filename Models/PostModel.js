const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        UserID:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users" //UserModel collection name
        },
        Post:{
            type:String,
            required:true
        },
        PostedDate:{
            type:Date,
            default:Date.now
        }

}
)

module.exports=mongoose.model("blogposts",postSchema)