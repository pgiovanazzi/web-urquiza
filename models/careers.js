const mongoose = require('mongoose')
const Schema = mongoose.Schema

const careersSchema = new Schema({
   name: { type: String, required: true },
   title: { type: String, required: true },
   description: { type: String, required: true },
   imageName: { type: String, required: true },
   studyProgrameFile: { type: String, required: true },
   route: {type: String, required: true}
})

let Careers = mongoose.model('Careers', careersSchema)

module.exports = Careers