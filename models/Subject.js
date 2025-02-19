const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const subjectSchema = new mongoose.Schema({
    subjectId: { type: Number, unique: true },
    name: { type: String, required: true, unique: true }, // Nom unique (ex: "Mathématiques")
    description: String, // Description de la matière
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Professeurs qui enseignent la matière
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School", required: true } // École associée
});

subjectSchema.plugin(AutoIncrement, { inc_field: "subjectId" });

const Subject = db.model("Subject", subjectSchema);
module.exports = Subject;