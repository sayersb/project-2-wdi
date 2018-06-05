const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   content: String,
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'} //picture now belongs to user
// });


const resultSchema = new mongoose.Schema({
  winner: String,
  second: String,
  third: String,
  fourth: String,
  topScorer: String,
  pott: String,
  image: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}  //picture now belongs to user
  // comments: [commentSchema]      //saved in related picture now (embedded)
});

module.exports = mongoose.model('Result', resultSchema);
