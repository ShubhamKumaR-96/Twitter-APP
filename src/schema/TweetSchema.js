import mongoose from "mongoose";

 const TweetSchema=new mongoose.Schema({
    body:{
        type:String,
        required:true,
        minLength:1,
        trim:true,
        maxLength:150
    }
})

export const Tweet=new mongoose.model("Tweets",TweetSchema)