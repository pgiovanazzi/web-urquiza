'use strict'

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
const nodemailer = require('nodemailer');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var historyInstituteRouter = require('./routes/historyInstitute');
var authoritiesRouter = require('./routes/authorities');
var headquartersRoutes = require('./routes/headquarters');
var libraryRoutes = require('./routes/library');
var cooperatingAssociationRoutes = require('./routes/cooperatingAssociation');
var informationEnteringRoutes = require('./routes/informationEntering');
var coursesEntrantsRoutes = require('./routes/coursesEntrants');
var functionalAnalysisRoutes = require('./routes/functionalAnalysis');
var itiRoutes = require('./routes/iti');
var softwareDevelopmentRoutes = require('./routes/softwareDevelopment');
var mainAdminRoutes = require('./routes/user/mainAdmin');
var pagesAdminRoutes = require('./routes/user/pagesAdmin');
var postsAdminRoutes = require('./routes/user/postsAdmin');
var usersAdminRoutes = require('./routes/user/usersAdmin');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
	secret: 'mysupresecret', // Hay que poner un secret mas furte
	resave: false,
	saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/nuestraHistoria', historyInstituteRouter);
app.use('/autoridades', authoritiesRouter);
app.use('/sedes', headquartersRoutes);
app.use('/biblioteca', libraryRoutes);
app.use('/asociacionCooperadora', cooperatingAssociationRoutes);
app.use('/informacionIngresantes', informationEnteringRoutes);
app.use('/cursosIngresos', coursesEntrantsRoutes);
app.use('/analisisFuncional', functionalAnalysisRoutes);
app.use('/iti', itiRoutes);
app.use('/desarrolloSoftware', softwareDevelopmentRoutes);
app.use('/user/mainAdmin', mainAdminRoutes);
app.use('/user/pagesAdmin', pagesAdminRoutes);
app.use('/user/postsAdmin', postsAdminRoutes);
app.use('/user/usersAdmin', usersAdminRoutes);

app.post("/send", (req, res) => {
  let user = req.body;
  contactUs(user, info => {
    console.log(` The email has been send and the id is ${info.messageId}, ${JSON.stringify(info.envelope)}`);
    //res.send(info);
    res.redirect('/');
  });
});

async function contactUs(user, callback) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ramuggeador@gmail.com", // generated ethereal user
      pass: "kNtP,jv>"// generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Urquiza web contacto 👻" <ramuggeador@gmail.com>', // sender address
    to: "ivanog@pm.me", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<h3> Consulta enviada desde urquiza web.<h3><br>
    <p>     Informacion <br>
            nombre: ${user.name},<br> 
            Email:  ${user.email},<br>
            Mensaje: ${user.message}
    </p>`// html body
  };
  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  callback(info);
}
//contactUs().catch(console.error);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
