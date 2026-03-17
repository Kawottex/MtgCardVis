import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mtgCardRoutes from './routes/mtgcards.routes';
import mongoose from 'mongoose';

const app = express();

// TODO: Temporary solution, should use middleware tool like multer for handling file uploads
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

app.use('/api/mtgcards', mtgCardRoutes);

mongoose.connect(process.env.MONGO_URI!)
    .then(() => app.listen(3000, () => console.log('✅ MongoDB connected, server running on port 3000')))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));