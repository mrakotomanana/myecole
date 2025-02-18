const mongoose = require('mongoose');
const db = require('../database/db');

const etablissementSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slogan: { type: String, required: true, unique: true },
    devise: { type: String, required: true },
}, { timestamps: true });

const Etablissement = db.model('Etablissement', etablissementSchema);
module.exports = Etablissement;