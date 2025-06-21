import express from 'express'
import { createTweet, getTweets, getTweetsId } from '../../controller/tweetController.js'
import { validate } from '../../validator/tweetZodValidator.js'
import { tweetZodSchemas } from '../../validator/ZodSchemaValidator.js'

const router=express.Router()


router.get('/', validate(tweetZodSchemas), getTweets)
router.get('/:id',getTweetsId)
router.post('/',createTweet)




export default router