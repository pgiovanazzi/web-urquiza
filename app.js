'use strict'

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const history = require('connect-history-api-fallback');
const multer = require('multer');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginSu');
var dashboardRouter = require('./routes/dashboard');
var aspirantRouter = require('./routes/aspirant');

var storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploaded-files'),
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname)
  }
})

const upload = multer({
  storage,
  dest: path.join(__dirname, 'uploaded-files')
}).fields([{
  name: 'logotype',
  maxCount: 1
}, {
  name: 'studyPlanFile',
  maxCount: 1
}])

const app = express();

// Middleware
app.use(upload)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(session({
  secret: 'mysupresecret', // Hay que poner un secret mas furte
  resave: false,
  saveUninitialized: false
}))
app.use(flash());

// CORS
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

// Middleware for Vuejs router mode history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploaded-files', express.static(path.join(__dirname, 'uploaded-files')));

// Routes
app.use('/', indexRouter);
app.use('/aspirante', aspirantRouter);
app.use('/su', loginRouter);
app.use('/su/panel', dashboardRouter);


app.post('/uploads', (req, res) => {
  try {
    console.log(req.files)
    res.status(200).json({
      success: true,
      message: 'Imagen subida.'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error, Imagen no subida.'
    })
  }
})

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + ' /public/'));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;