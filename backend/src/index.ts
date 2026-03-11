import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users';
import mtgCardRoutes from './routes/mtgcards.routes';
import mongoose from 'mongoose';

const app = express();

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/mtgcards', mtgCardRoutes);

mongoose.connect(process.env.MONGO_URI!)
    .then(() => app.listen(3000, () => console.log('✅ MongoDB connected, server running on port 3000')))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));