const express = require('express');
const Database = require('../models/Database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/create', authMiddleware, async (req, res) => {
  const { dbName } = req.body;
  const newDb = new Database({ name: dbName, userId: req.user.id });
  await newDb.save();
  res.json({ success: true });
});

router.get('/list', authMiddleware, async (req, res) => {
  const dbs = await Database.find({ userId: req.user.id });
  res.json({ databases: dbs });
});

module.exports = router;
