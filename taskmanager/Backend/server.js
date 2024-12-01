import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.config.js";
import taskRoutes from './routes/tasks.routes.js'

dotenv.config()
const app = express()
app.use(express.json());
app.use("/tasklist",taskRoutes)

app.get('/',(req,res)=>{
    res.send('Welcome to Server')
})
app.listen(5000,()=>{
    connectDB()
    console.log("Server Stsarted")
})