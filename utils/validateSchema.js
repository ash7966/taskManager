const joi=require('joi');

const taskGetSchema= joi.object({
    id:joi.string().required()})


const taskAllSchema=
   joi.object({
        page:joi.number().default(1),
        limit:joi.number().default(10)
    })
    


const taskPostSchema=joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        status:joi.string().optional(),
        assignee:joi.string().optional(),
        timeEstimate:joi.number().optional()
    })


const taskUpdateSchema=joi.object({
        id:joi.string().required(),    
        title:joi.string().required(),
        description:joi.string().required(),
        status:joi.string().optional(),
        assignee:joi.string().optional(),
        timeEstimate:joi.number().optional()
    })


module.exports={
    taskGetSchema,
    taskAllSchema,
    taskPostSchema,
    taskUpdateSchema
}