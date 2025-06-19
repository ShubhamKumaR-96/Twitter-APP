import express from 'express'
import { getTweets, getTweetsId } from '../../controller/tweetController.js'
import { tweetManualValidator } from '../../validator/tweetManualValidator.js'

const router=express.Router()


router.get('/', tweetManualValidator, getTweets)
router.get('/:id',getTweetsId)




export default router