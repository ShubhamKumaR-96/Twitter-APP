import express from 'express'
import { commentController } from '../../controller/commentController.js'

const router=express.Router()


router.get('/',commentController)




export default router