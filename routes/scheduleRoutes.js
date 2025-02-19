const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

router.post("/", async (req, res) => {
    try {
      const newSchedule = new Schedule(req.body);
      await newSchedule.save();
      res.status(201).json(newSchedule);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

router.get("/", async (req, res) => {
    try {
      const schedules = await Schedule.find().populate("course");
      res.status(200).json(schedules);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


router.get("/:id", async (req, res) => {
    try {
      const schedule = await Schedule.findById(req.params.id).populate("course");
      if (!schedule) return res.status(404).json({ error: "Schedule not found" });
      res.status(200).json(schedule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


router.put("/:id", async (req, res) => {
    try {
      const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedSchedule) return res.status(404).json({ error: "Schedule not found" });
      res.status(200).json(updatedSchedule);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

router.delete("/:id", async (req, res) => {
    try {
      const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
      if (!deletedSchedule) return res.status(404).json({ error: "Schedule not found" });
      res.status(200).json({ message: "Schedule deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;