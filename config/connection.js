const mongoose = require('mongoose');

//mlab
const mlab = 'mongodb://pi.automata:automatasdelsiglo21@ds011228.mlab.com:11228/urquizadb'

//localhost
const lh = 'mongodb://localhost:27017/urquiza_db'

mongoose.connect(lh, { useNewUrlParser: true })
   .then(db => console.log("DB is connected"))
   .catch(err => console.error(err));

module.exports = mongoose