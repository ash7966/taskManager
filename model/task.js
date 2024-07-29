const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    assignee:{type:String},
    timeEstimate:{type:Number}

},{timestamps:true});

const TaskModel=mongoose.model('task',taskSchema);

module.exports = TaskModel