const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const gradeSchema = new mongoose.Schema({
    gradeId: { type: Number, unique: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Élève noté
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Cours concerné
    score: { type: Number, required: true, min: 0, max: 20 }, // Note (ex: 15/20)
    date: { type: Date, default: Date.now }, // Date d'évaluation
    comments: { type: String },
});

gradeSchema.plugin(AutoIncrement, { inc_field: "gradeId" });

const Grade = db.model("Grade", gradeSchema);
module.exports = Grade;