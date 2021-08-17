const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const colorSchema = new Schema({
  name: { type: String, required: true },
  code: [String],
}, {
  timestamps: true
});

module.exports = mongoose.model('Color', colorSchema);