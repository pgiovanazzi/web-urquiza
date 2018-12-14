let mongoose = require('mongoose');

// conectar al mlab
mongoose.connect('mongodb://pi.automata:automatasdelsiglo21@ds011228.mlab.com:11228/urquizadb', { useNewUrlParser: true });

//conectar al localhost
//mongoose.connect('mongodb://localhost:27017/urquiza_db', { useNewUrlParser: true });

module.exports = mongoose;