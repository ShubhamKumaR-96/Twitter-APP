import { createTweet as createTweetService } from "../service/tweetService.js"

export const getTweets=(req,res)=>{
    return res.json({
        msg:"Welcome to the tweet routes"
    })
}

export const getTweetsId=(req,res)=>{
    return res.json({
        msg:"Welcome to the tweet routes",
        id:req.params.id
    })
}

export const createTweet=async(req,res)=>{
    const { body } = req.body;
    try {
       const response=await createTweetService({body}) 
       return res.status(201).json({
        success:true,
        data:response,
        message:"Tweet created sucessfully"
       })
    } catch (error) {
       console.log(error)
       return res.status(500).json({
        message:"internal server error ??",
        success:false
       }) 
    }
}