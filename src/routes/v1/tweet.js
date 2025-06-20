import express from 'express'
import { getTweets, getTweetsId } from '../../controller/tweetController.js'
import { tweetManualValidator } from '../../validator/tweetManualValidator.js'
import { validate } from '../../validator/tweetZodValidator.js'
import { tweetZodSchemas } from '../../validator/ZodSchemaValidator.js'

const router=express.Router()


router.get('/', validate(tweetZodSchemas), getTweets)
router.get('/:id',getTweetsId)




export default router