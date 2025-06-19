export const tweetManualValidator=(req,res,next)=>{
    if(!req.body.tweet){
        return res.json({
            error:"Tweet is required"
        })
    }

    if(req.body.tweet.length > 50){
        return res.json({
            error:"Tweet can contain only 50 letters"
        })
    }

    next()
}