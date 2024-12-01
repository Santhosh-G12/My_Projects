import mongoose from "mongoose"
export const connectDB = async()=>{
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`DAtabse connnected ${connect.connection.host}`)
    
}
