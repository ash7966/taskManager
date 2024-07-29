const express = require('express');
const TaskModel = require('../model/task');
const router = express.Router();
const validate=require('../utils/validate');
const { taskGetSchema, taskAllSchema, taskPostSchema, taskUpdateSchema } = require('../utils/validateSchema');

router.get('/',validate(taskAllSchema),async(req,res)=>{

    //get all tasks

    let tasks=await TaskModel.find()

    return res.json({status:200,data:tasks});
})

router.get('/:id',validate(taskGetSchema),async(req,res)=>{

    //get task by id

    let {id}=req.params;

    let task=await TaskModel.findById(id);

    if(!task){
        return res.json({status:404,data:{message:'Task not found'}});
    }

    return res.json({status:200,data:task});
})

router.post('/',validate(taskPostSchema),async(req,res)=>{
    //create a new task

    let {title,description,status,assignee,timeEstimate}=req.body;

   

    let taskObj=new TaskModel({title,description,status,assignee,timeEstimate});
   
    await taskObj.save();
    return res.json({status:200,data:taskObj});
})

router.patch('/',validate(taskUpdateSchema),async(req,res)=>{
    //update a task
   
    let {id,title,description,status,assignee,timeEstimate}=req.body;
    let updatedTask=await TaskModel.findByIdAndUpdate(id,{title,description,status,assignee,timeEstimate},{
        new:true,
    });

    return res.json({status:200,data:updatedTask});
})

router.delete('/:id',validate(taskGetSchema),async(req,res)=>{
    //delete a task
    let {id}=req.params;
    await TaskModel.findByIdAndDelete(id);
    return res.json({status:200,message:'Task deleted successfully'});
})

module.exports = router;