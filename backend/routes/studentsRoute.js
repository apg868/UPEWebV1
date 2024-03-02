import express from "express";
import { Student } from "../models/studentModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.title ||
            !req.body.major ||
            !req.body.year 
        ) {
            return res.status(400).send({
                message: "Please send all the required fields: name, title, major, & year"
            });
        }
        const newStudent = {
            name: req.body.name,
            title: req.body.title,
            major: req.body.major,
            year: req.body.year
        };
        if (req.body.funfact) {
            newStudent.funfact = req.body.funfact;
        }
        if (req.body.imagePath) {
            newStudent.imagePath = req.body.imagePath;
        }
        const student = await Student.create(newStudent);

        res.status(201).send(student);
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;