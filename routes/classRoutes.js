const express = require("express");
const router = express.Router();
const Class = require("../models/Class");

router.post("/", async (req, res) => {
    try {
        let { name, level, students, teachers, school } = req.body;
        const newClass = new Class({ name, level, students, teachers, school });
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const classes = await Class.find().populate("students teachers school");
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        let idClass = req.params.id;
        const classData = await Class.find({ classeId: idClass }).populate("students teachers school");
        if (!classData) return res.status(404).json({ error: "Class not found" });
        res.status(200).json(classData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        let idClass = req.params.id;
        const updatedClass = await Class.findOneAndUpdate(idClass, req.body, { new: true });
        if (!updatedClass) return res.status(404).json({ error: "Class not found" });
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const deletedClass = await Class.findByIdAndDelete(req.params.id);
      if (!deletedClass) return res.status(404).json({ error: "Class not found" });
      res.status(200).json({ message: "Class deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;