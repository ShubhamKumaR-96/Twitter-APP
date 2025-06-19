import express from 'express'
import commentRouter from './comment.js'
import tweetRouter from './tweet.js'


const router=express.Router()


router.use('/tweet',tweetRouter)
router.use('/comment',commentRouter)

export default router;