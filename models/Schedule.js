const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const scheduleSchema = new mongoose.Schema({
    scheduleId: { type: Number, unique: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true }, // Classe concernée
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Cours associé
    day: { type: String, required: true, enum: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] }, // Jour de la semaine
    startTime: { type: String, required: true }, // Heure de début (ex: "08:00")
    endTime: { type: String, required: true }, // Heure de fin (ex: "09:30")
    classroom: { type: String }, // Ex: "Salle 101"
});

scheduleSchema.plugin(AutoIncrement, { inc_field: "scheduleId" });

const Schedule = db.model("Schedule", scheduleSchema);
module.exports = Schedule;