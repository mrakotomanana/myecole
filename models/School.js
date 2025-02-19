const mongoose = require('mongoose');
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SchoolSchema = new mongoose.Schema({
    schoolId: { type: Number, unique: true }, 
    name: { type: String, required: true, unique: true },
    slogan: { type: String, default: "Aucun slogan."},
    address: { type: String },
    phone: { type: String },
}, { timestamps: true });

SchoolSchema.plugin(AutoIncrement, { inc_field: "schoolId" });

const School = db.model('School', SchoolSchema);
module.exports = School;