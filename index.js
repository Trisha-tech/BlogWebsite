import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import connectdb from './connectdb.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
dotenv.config();

const app = express();

connectdb.connect();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

//api redirecting to /routes directory for each type of request
app.get("/api/user",userRoutes);
app.get("/api/blogs",blogRoutes);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));