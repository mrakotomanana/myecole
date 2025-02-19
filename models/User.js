const mongoose = require('mongoose');
const db = require('../database/db');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UserSchema = new mongoose.Schema({
    userId: { type: Number, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "teacher", "student", "parent", "staff"], default: "student" }
  });

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });
  
const User = db.model("User", UserSchema);
module.exports = User;
  