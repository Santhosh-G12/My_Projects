import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskname:{
        type:String,
        require : true
    },
    taskdescription:{
        type:String,
        
    },
    priority :{
        type:Boolean
    },
    
},{
    timestamps:true
})

const Tasks = mongoose.model("task",taskSchema)
export default Tasks;