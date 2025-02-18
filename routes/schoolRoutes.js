const express = require('express');
const router = express.Router();
const School = require('../models/School');

router.get("/", async function(req, res) {
    // res.json({ message : 'shool ok get ' + req.url});
    try {
        const schools = await School.find();
        res.json(schools);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

router.get("/:id", async function(req, res) {
    res.json({ message : 'shool ok get ' + req.params.id});
});

router.post('/', async function(req, res) {
    // res.json({ message : 'shool ok post ' + req.url});
    try {
        const { name, slogan, address, phone } = req.body;
        const newSchool = new School({ name, slogan, address, phone });
        await newSchool.save();
        res.status(201).json(newSchool);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

module.exports = router;