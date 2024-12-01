import Tasks from "../models/task.model.js";

export const addTask = async (req,res) =>{
    const task = req.body
    const newTask = new Tasks(task)
    try{
        await newTask.save()
        res.status(200).json({success:true,message :"New Task Added"})
    }catch(error){
        console.error("Error in adding",error.message)
    } 
}

export const deleteTask = async(req,res)=>{
    try{
        const id = req.params.id
        
        await Tasks.findByIdAndDelete(id)
        res.status(200).json({success:"item deleted"})
    }catch(error){
        res.status(404).json({success:"Product not found"})
    }
}

export const updateTask = async(req,res)=>{
    try{
        const id = req.params.id
        const task = req.body
        await Tasks.findByIdAndUpdate(id,task,{new:true})
        res.status(200).json({success:true,message:"Product Updated"})
    }catch(error){
        res.status(500).json({success:false,message:"Invalid Task"})
        
    }
}

export const getAlltasks = async (req,res)=>{
    try{
        const alltasks = await Tasks.find({})
        res.status(200).json({success:true,tasks:alltasks})
    }catch(error){
        res.status(500).json({success:false})
    }
}