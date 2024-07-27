import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoute.js';

// config .env
dotenv.config();

// database connection 
connectDb();

const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Hello MERN project</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
