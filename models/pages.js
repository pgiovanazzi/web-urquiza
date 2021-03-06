"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pagesSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  section: {
    type: String,
    enum: ["INSTITUCIONAL", "INGRESANTES"],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true
  },
  metaLabel: {
    type: String,
    required: false
  },
  metaDescription: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Pages = mongoose.model("Pages", pagesSchema);

module.exports = Pages;
