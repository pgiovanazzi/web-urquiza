var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
