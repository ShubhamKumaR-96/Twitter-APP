import express from 'express'

const router=express.Router()


router.get('/',(req,res)=>{
    res.json({
        msg:"Welcome to the comment routes v2"
    })
})
router.get('/:id',(req,res)=>{
    res.json({
        msg:"Welcome to the cmnts routes id v2",
        id:req.params.id
    })
})



export default router