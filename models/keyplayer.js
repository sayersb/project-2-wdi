const mongoose = require('mongoose');

const keyPlayerSchema = new mongoose.Schema({
  name: String,
  country: String,
  caps: Number,
  goals: Number,
  club: String,
  image: String
});


module.exports = mongoose.model('KeyPlayer', keyPlayerSchema);
