import express from 'express'
import { getTweets, getTweetsId } from '../../controller/tweetController.js'

const router=express.Router()


router.get('/',getTweets)
router.get('/:id',getTweetsId)



export default router