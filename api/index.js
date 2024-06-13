import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=> {
    console.log(err);
})

const app = express();



app.listen(4000, () => {
    console.log("Server listening on port 4000")
})