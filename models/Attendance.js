const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const attendanceSchema = new mongoose.Schema({
    attendanceId: { type: Number, unique: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Élève concerné
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Cours suivi
    date: { type: Date, required: true }, // Date de la présence
    status: { type: String, enum: ["Présent", "Absent"], required: true },
    arrivalTime: { type: Date }, // Heure d'arrivée de l'élève
    isLate: { type: Boolean, default: false }, // Statut de retard
    comments: { type: String }, // Commentaires (ex: "Malade", "Vacances")
});

attendanceSchema.plugin(AutoIncrement, { inc_field: "attendanceId" });

const Attendance = db.model("Attendance", attendanceSchema);
module.exports = Attendance;