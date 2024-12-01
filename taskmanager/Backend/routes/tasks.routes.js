import express from "express";
import { addTask, deleteTask, getAlltasks, updateTask } from "../controller/task.controller.js";

const router = express.Router()

//Add task API
router.post("/",addTask)

//DeleteTask API
router.delete("/:id",deleteTask)

//updateTask API
router.put("/:id",updateTask)

//getAlltasks API
router.get("/",getAlltasks)

export default router;