const express = require("express");
const router = express.Router();
const Fee = require("../models/Fee");

router.post("/", async (req, res) => {
  try {
    const newFee = new Fee(req.body);
    await newFee.save();
    res.status(201).json(newFee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const fees = await Fee.find().populate("student");
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/student/:studentId", async (req, res) => {
  try {
    const fees = await Fee.find({ student: req.params.studentId }).populate("student");
    if (fees.length === 0) return res.status(404).json({ error: "No fees found for this student" });
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedFee = await Fee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFee) return res.status(404).json({ error: "Fee not found" });
    res.status(200).json(updatedFee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedFee = await Fee.findByIdAndDelete(req.params.id);
    if (!deletedFee) return res.status(404).json({ error: "Fee not found" });
    res.status(200).json({ message: "Fee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;