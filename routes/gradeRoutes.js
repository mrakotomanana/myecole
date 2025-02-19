const express = require("express");
const router = express.Router();
const Grade = require("../models/Grade");

router.post("/", async (req, res) => {
    try {
      const newGrade = new Grade(req.body);
      await newGrade.save();
      res.status(201).json(newGrade);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const grades = await Grade.find().populate("student course");
      res.status(200).json(grades);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedGrade) return res.status(404).json({ error: "Grade not found" });
      res.status(200).json(updatedGrade);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  router.put("/:id", async (req, res) => {
    try {
      const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedGrade) return res.status(404).json({ error: "Grade not found" });
      res.status(200).json(updatedGrade);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  module.exports = router;