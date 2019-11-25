const { Schema, Model } = require("mongoose");

const fqaSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = Model("FQAs", fqaSchema);
