'use strict'

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginSu');
var preinscripcionRouter = require('./routes/preinscripcion');
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
app.use('/su', loginRouter);
app.use('/preinscripcion', preinscripcionRouter);
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
