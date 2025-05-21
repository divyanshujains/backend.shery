const postModel = require("../models/post.model")

 



 async function createPost(req,res){
    const {imageUrl ,  caption} = req.body

    const post =  await postModel.create({
        imageUrl:imageUrl,  
        caption:caption
    })

 res.status(201).json({
    message:"post created successfully",
    post
 })



 }


 module.exports = {createPost}