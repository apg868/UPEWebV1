import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        major: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        funfact: {
            type: String,
            required: false
        },
        image_path: {
            type: String,
            required: false
        }
    }
);

export const Student = mongoose.model("Student", studentSchema);