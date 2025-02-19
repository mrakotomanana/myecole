const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const courseSchema = new mongoose.Schema({    
    courseId: { type: Number, unique: true },
    title: { type: String, required: true }, // Titre du cours
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true }, // Matière enseignée
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Professeur du cours
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true }, // Classe concernée
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: "Schedule" } // Référence à l'emploi du temps
});

courseSchema.plugin(AutoIncrement, { inc_field: "courseId" });

const Course = db.model("Course", courseSchema);
module.exports = Course;