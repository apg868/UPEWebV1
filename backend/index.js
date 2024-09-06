import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentsRoute from "./routes/student-routes.js";

const app = express();
dotenv.config();

const dbURL = process.env.DB_URL;
const port = process.env.PORT;

app.use(express.json());

app.use(cors({
    methods: "GET"
}));

app.use("/students", studentsRoute);

mongoose.connect(dbURL)
    .then(() => {
        console.log("Successfully connected to db");
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    });