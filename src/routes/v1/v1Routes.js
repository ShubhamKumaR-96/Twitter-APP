import express from 'express'
import tweetRouter from '../v1/tweet.js'
import commentRouter from '../v1/comment.js'

const router=express.Router()


router.use('/tweet',tweetRouter)
router.use('/comment',commentRouter)

export default router;