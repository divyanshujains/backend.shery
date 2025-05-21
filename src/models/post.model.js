const mongoose = require('mongoose')



const postSchema =  new mongoose.Schema({
    imageUrl:String,
    caption:String,
    likecount:{
        type:Number,
        default:0
    }
})

const postModel =   mongoose.model("post", postSchema)

module.exports = postModel