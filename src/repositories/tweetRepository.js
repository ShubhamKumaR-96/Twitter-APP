import { Tweet } from "../schema/TweetSchema.js"

export const createTweet=async({body})=>{
    try {
        const tweet=await Tweet.create({body})
        return tweet
    } catch (error) {
        console.log("error while creating tweet",error)
        throw error
    }
}

export const getTweets=async()=>{
    try {
        const tweet=await Tweet.find()
        return tweet
    } catch (error) {
        throw error
    }
}

export const getTweetById=async(id)=>{
    try {
        const tweet=await Tweet.findById(id)
        return tweet
    } catch (error) {
        throw error
    }
}