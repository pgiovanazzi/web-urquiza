var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;


//function random psswrd
function make_pwd() {
  let text = "";
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'dni',
  passReqToCallback: true
}, function (req, email, dni, done) {
  User.findOne({ 'dni': dni }, function (err, user) {
    if (err) return done(err);
    if (user) return done(null, false, { message: 'El DNI está en uso...' });
    User.findOne({ 'email': email }, function (err, user) {
      if (err) return done(err);
      if (user) return done(null, false, { message: 'El correo electrónico está en uso.' });
      var newUser = new User();
      newUser.name = req.body.name;
      newUser.doc_type = req.body.doc_type;
      newUser.dni = dni;
      newUser.pwd = newUser.encryptPassword(make_pwd());
      newUser.birth = req.body.birth;
      newUser.gender = req.body.gender;
      newUser.email = email;
      newUser.phone = req.body.phone_number;
      newUser.year_ins = req.body.year_ins;
      newUser.career = req.body.careers;
      newUser.place_career = req.body.place_career;
      newUser.address = req.body.address;
      newUser.floor = req.body.floor;
      newUser.dpt = req.body.dpt;
      newUser.city = req.body.city;
      newUser.zipCode = req.body.zip_code;
      newUser.estudios_sup = req.body.estudios_sup;
      newUser.last_year_c = req.body.last_year_c;
      newUser.career_comp = req.body.carrer_comp;
      newUser.save(function (err, result) {
        if (err) return done(err);
        return done(null, newUser);
      })
    })
    
  });
}));