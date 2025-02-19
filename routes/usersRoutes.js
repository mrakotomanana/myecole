const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', function(req, res) {
  // res.json({message : 'user find ' + req.url});
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', function(req, res) {
  // res.json({message : 'user find id ' + req.params.id});
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', function(req, res) {
  // res.json({message : 'post user ' + req.url});
  try {
    const { name, email, password, role } = req.body;
    
    const newUser = new User({
      name,
      email,
      password,  // Pense à hasher le mot de passe avant de le stocker
      role
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password, role },
      { new: true } // Retourner l'utilisateur mis à jour
    );
    
    if (!updatedUser) return res.status(404).json({ error: "Utilisateur non trouvé" });
    
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = router;
