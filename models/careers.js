const mongoose = require('mongoose')
const Schema = mongoose.Schema

const careersSchema = new Schema({
   description: {
      type: String,
      required: true
   },
   certificName: {
      type: String,
      required: true
   },
   years: {
      type: String,
      required: true
   },
   content: {
      type: String,
      required: true
   },
   alias: {
      type: String,
      required: true
   },
   published: {
      type: Boolean,
      required: true
   },
   logotypeName: {
      type: String,
      required: true
   },
   planFileName: {
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
})

let Careers = mongoose.model('Careers', careersSchema)

module.exports = Careers