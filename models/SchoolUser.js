const mongoose = require("mongoose");

const SchoolUserSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  school: { type: mongoose.Schema.Types.ObjectId, ref: "School", required: true },
  role: { type: String, enum: ["admin", "teacher", "student", "parent", "staff"], required: true }
});

const SchoolUser = mongoose.model("SchoolUser", SchoolUserSchema);
module.exports = SchoolUser;
