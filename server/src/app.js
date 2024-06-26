import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser());

//routes import
import predictRoute from './routes/predictspam.route.js';

//routes declaration
app.use('/api/v1/predict', predictRoute);

export { app, port }
