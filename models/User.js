const mongoose = require('mongoose');
const db = require('../database/db');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "teacher", "student", "parent"], default: "student" }
  });
  
  const User = db.model("User", UserSchema);
  module.exports = User;
  