import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentsRoute from "./routes/studentsRoute.js";

const app = express();
dotenv.config();

const dbURL = process.env.dbURL;
const port = process.env.port;

app.use(express.json());

app.use(cors());

app.use("/students", studentsRoute);

//TODO: create db & read port & dbURL from .env file
mongoose.connect(dbURL)
    .then(() => {
        console.log("Successfully connected to db");
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    });