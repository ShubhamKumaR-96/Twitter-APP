import express from 'express'
import { createTweet } from '../../controller/tweetController.js'

const router=express.Router()


router.post('/',createTweet)




export default router