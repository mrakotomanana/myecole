const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', function(req, res) {
  res.json({message : 'user find ' + req.url});
});

router.get('/:id', function(req, res) {
  res.json({message : 'user find id ' + req.params.id});
});

router.post('/', function(req, res) {
  res.json({message : 'post user ' + req.url});
});

module.exports = router;
