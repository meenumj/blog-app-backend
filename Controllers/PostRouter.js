const express=require("express")
const postModel=require("../Models/PostModel")

const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let post = new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })

})


router.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("UserID","Name Email -_id")
    .exec()
    res.json(result)
})

router.post("/viewmypost",async(req,res)=>{
    let input=req.body
    let data=await postModel.find(input)
    res.json(data)
})


module.exports=router
