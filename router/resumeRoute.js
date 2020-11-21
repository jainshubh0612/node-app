const router = require('express').Router()
const Resume = require('../models/resumeModel')

router.get('/:id' ,async (req ,res) => {
    const id = req.params.id
    try{
        const resume = await Resume.findById(id) 

        if(!resume){
            return res.status(401).json({
                success:false,
                    msg:'No Resume found'  
            })
        }

        res.status(200).json({
            success:true,
            resume
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err
        })
    }
    
})

router.post('/' ,async (req ,res) => {
    const { name , email , phone , location} = req.body
    try{
    const newResume =await new Todo({
        name ,
        email,
        phone,
        location,
        skills:req.body.skills.split(','),
        experience:{
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
    })
     await newResume.save()
        res.status(200).json({
            id:newResume._id
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err
        })
    }
})


router.put('/:id' ,async (req ,res) => {
    const id = req.params.id

    try{
        const resume = await Resume.findByIdAndUpdate(id, req.body,{new: true})

        if(!resume){
            return res.status(401).json({
                success:false,
                msg:'No Resume found'
            })
        }

        res.status(200).json({
            success:true,
            msg:'Resume updated successfully',
            resume
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err
        })
    }
})


router.delete('/:id' ,async (req ,res) => {
    const id = req.params.id

    try{
        const resume = await Resume.findByIdAndDelete(id)

        if(!resume){
            return res.status(401).json({
                success:false,
                msg:'No resume found'
            })
        }

        res.status(200).json({
            success:true,
            msg:'resume deleted successfully',
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err
        })
    }
})


module.exports = router