import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'
import path from 'path';

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=> {
    console.log(err);
});

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/quartres/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'quartres', 'dist', 'index.html'));
});

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);



app.listen(4000, () => {
    console.log("Server listening on port 4000")
});


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});