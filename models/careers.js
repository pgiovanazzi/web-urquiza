const mongoose = require('mongoose')
const Schema = mongoose.Schema

const careersSchema = new Schema({
   description: {
      type: String,
      required: true
   },
   title: {
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
   logotype: {
      type: String,
      required: true
   },
   studyProgrameFile: {
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