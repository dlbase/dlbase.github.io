const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    user = new User({ email, password });
    await user.save();
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ success: true, token });
});

module.exports = router;
