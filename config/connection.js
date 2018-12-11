let mongoose = require('mongoose');
mongoose.connect('mongodb://pi.automata:automatasdelsiglo21@ds011228.mlab.com:11228/urquizadb', { useNewUrlParser: true });

module.exports = mongoose;