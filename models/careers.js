const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const careersSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  certificName: {
    type: String,
    required: true,
    unique: true
  },
  years: {
    type: String,
    required: true
  },
  time: {
    type: String,
    enum: ["M", "T", "N"],
    default: "N"
  },
  content: {
    type: String,
    required: true
  },
  section: {
    type: String,
    default: "CARRERAS"
  },
  alias: {
    type: String,
    required: true,
    unique: true
  },
  published: {
    type: Boolean,
    required: true
  },
  metaDescription: {
    type: String,
    required: false
  },
  metaLabel: {
    type: String,
    required: false
  },
  logotype: {
    type: String,
    required: true
  },
  studyPlanFile: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Careers = mongoose.model("Careers", careersSchema);

module.exports = Careers;
