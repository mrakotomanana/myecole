const mongoose = require('mongoose');
const db = require('../database/db');

const SchoolSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slogan: { type: String, required: true, unique: true },
    address: { type: String },
    phone: { type: String },
}, { timestamps: true });

const School = db.model('School', SchoolSchema);
module.exports = School;