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

router.get("/", async (req, res) => {
    try {
        const students = await Student.find({});
        return res.status(200).json({
            num: students.length,
            data: students
        });
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ message: "Student does not exist" });
        }

        return res.status(200).json(student);
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.title ||
            !req.body.major ||
            !req.body.year
        ) {
            res.status(400).send({
                message: "Please send all the required fields: name, title, major, & year"
            });
        }

        const { id } = req.params;

        const updatedStudent = {
            name: req.body.name,
            title: req.body.title,
            major: req.body.major,
            year: req.body.year
        }
        if (req.body.funfact) {
            updatedStudent.funfact = req.body.funfact;
        }
        if (req.body.imagePath) {
            updatedStudent.imagePath = req.body.imagePath;
        }

        const result = await Student.findByIdAndUpdate(id, updatedStudent);

        if (!result) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).send({ message: "Student updated successfully" });
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Student.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "Student does not exist" });
        }
        return res.status(200).send({ message: "Student deleted successfully" });
    } catch(error) {
        console.log(error.message);
        res.status(500).send( {message: error.message });
    }
});

export default router;