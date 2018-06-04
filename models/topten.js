const mongoose = require('mongoose');

const toptenSchema = new mongoose.Schema({
  country: String,
  ranking: Number,
  history: String,
  stars: String,
  odds: Number,
  image: String
});

module.exports = mongoose.model('Topten', toptenSchema);
