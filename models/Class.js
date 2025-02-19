const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const classSchema = new mongoose.Schema({
    classeId: { type: Number, unique: true },
    name: { type: String, required: true, unique: true }, // (ex: "6ème A")
    level: { type: String, required: true }, // (ex: "6ème", "Terminale")
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Élèves inscrits
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Professeurs responsables
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School", required: true } // École associée
});

classSchema.plugin(AutoIncrement, { inc_field: "classeId" });

const Class = db.model("Class", classSchema);
module.exports = Class;