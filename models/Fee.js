const mongoose = require("mongoose");
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const feeSchema = new mongoose.Schema({
    feeId: { type: Number, unique: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Élève concerné
    amount: { type: Number, required: true }, // Montant du paiement
    dueDate: { type: Date, required: true }, // Date limite de paiement
    status: { type: String, enum: ["Payé", "En attente", "En retard"], default: "En attente" } // Statut du paiement
});

feeSchema.plugin(AutoIncrement, { inc_field: "feeId" });

const Fee = db.model("Fee", feeSchema);
module.exports = Fee;