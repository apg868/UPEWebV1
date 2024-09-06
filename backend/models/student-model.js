import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        rank: {
            type: String,
            required: true
        },
        major: {
            type: String,
            required: true
        },
        classYear: {
            type: Number,
            required: true
        },
        company: {
            type: String,
            required: false
        },
        imageUrl: {
            type: String,
            required: false
        }
    }
);

export const Student = mongoose.model("Student", studentSchema, "students");