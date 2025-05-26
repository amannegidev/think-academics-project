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

// Allowed Origins
const allowedOrigins = [
  'https://think-academics-project.vercel.app/',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Origin ${origin} not allowed`));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));



app.use(express.json());



// Authentication routes 
app.use('/api/v1/auth', authRoutes);


//  SERVER LISTENING --->
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



