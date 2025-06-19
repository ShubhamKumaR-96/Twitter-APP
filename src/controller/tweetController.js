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