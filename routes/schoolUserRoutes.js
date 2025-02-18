const express = require("express");
const router = express.Router();
const SchoolUser = require("../models/SchoolUser");
const User = require("../models/User");
const School = require("../models/School");

router.get("/", async (req, res) => {
    res.json({message: 'user school ' + req.url});
    //   try {
//     const users = await SchoolUser.find({ school: req.params.schoolId }).populate("user");
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
});


router.post("/", async (req, res) => {

    res.json({message: 'post user school ' + req.url});
//   try {
//     const { userId, schoolId, role } = req.body;

//     const user = await User.findById(userId);
//     const school = await School.findById(schoolId);

//     if (!user || !school) {
//       return res.status(404).json({ error: "Utilisateur ou école non trouvé" });
//     }

//     const existingAssociation = await SchoolUser.findOne({ user: userId, school: schoolId });
//     if (existingAssociation) {
//       return res.status(400).json({ error: "L'utilisateur est déjà associé à cette école" });
//     }

//     const schoolUser = new SchoolUser({ user: userId, school: schoolId, role });
//     await schoolUser.save();

//     res.status(201).json(schoolUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
});

router.get("/user/:userId", async (req, res) => {
    res.json({message: 'get user school ' + req.params.userId});

//   try {
//     const schools = await SchoolUser.find({ user: req.params.userId }).populate("school");
//     res.json(schools);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
});

router.get("/school/:schoolId", async (req, res) => {
    res.json({message: 'get user school ' + req.params.schoolId});
    //   try {
//     const users = await SchoolUser.find({ school: req.params.schoolId }).populate("user");
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
});

router.delete("/:id", async (req, res) => {
    res.json({message: 'delete user school ' + req.params.id});

//   try {
//     const association = await SchoolUser.findByIdAndDelete(req.params.id);
//     if (!association) return res.status(404).json({ error: "Association non trouvée" });

//     res.json({ message: "Association supprimée avec succès" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
});

module.exports = router;
