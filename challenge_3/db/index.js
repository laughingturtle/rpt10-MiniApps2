var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/bowling');

var scoreSchema = new Schema({
  score: Number,
  date: {type: Date, default: Date.now}
})

var Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
