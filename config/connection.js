let mongoose = require('mongoose');

//mlab connection
//mongoose.connect('mongodb://pi.automata:automatasdelsiglo21@ds011228.mlab.com:11228/urquizadb', { useNewUrlParser: true });

//localhost connection
mongoose.connect('mongodb://localhost:27017/urquiza_db', { useNewUrlParser: true });

module.exports = mongoose;