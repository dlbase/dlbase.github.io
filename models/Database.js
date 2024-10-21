const mongoose = require('mongoose');
const crypto = require('crypto');

const databaseSchema = new mongoose.Schema({
  name: String,
  userId: mongoose.Schema.Types.ObjectId,
  apiUrl: {
    type: String,
    default: () => crypto.randomBytes(16).toString('hex')
  },
  files: [{ type: String }]
});

module.exports = mongoose.model('Database', databaseSchema);
