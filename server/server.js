import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/dbConnection.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import path from "path";
import cors from 'cors';


const app = express();

dotenv.config({ path: './.env' });

// Connect to MongoDB
connectDB();

// Middleware 

app.use(cors({
  origin: 'https://think-academics-project-vw52.vercel.app',
  credentials: true,
}));


app.use(express.json());



// Authentication routes 
app.use('/api/v1/auth', authRoutes);


//  SERVER LISTENING --->
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



