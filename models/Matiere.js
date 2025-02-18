const mongoose = require('mongoose');
const db = require('../database/db');

const matiereSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
}, { timestamps: true });

const Matiere = db.model('Matiere', matiereSchema);
module.exports = Matiere;