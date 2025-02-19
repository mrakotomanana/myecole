const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.get("/", async (req, res) => {
    try {
      const courses = await Course.find().populate("subject teacher class");
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post("/", async (req, res) => {
    try {
      const newCourse = new Course(req.body);
      await newCourse.save();
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const course = await Course.findById(req.params.id).populate("subject teacher class");
      if (!course) return res.status(404).json({ error: "Course not found" });
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCourse) return res.status(404).json({ error: "Course not found" });
      res.status(200).json(updatedCourse);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  router.delete("/:id", async (req, res) => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      if (!deletedCourse) return res.status(404).json({ error: "Course not found" });
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;
