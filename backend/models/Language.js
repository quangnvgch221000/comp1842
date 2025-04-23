const mongoose = require('mongoose');
const LanguageSchema = new mongoose.Schema({
  name: String,
  level: String,
  language: String
});
module.exports = mongoose.model('Language', LanguageSchema);
