import express from "express";
import { Student } from "../models/student-model.js";

const router = express.Router();

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

export default router;