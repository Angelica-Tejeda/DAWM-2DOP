var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");
const cors = require("cors");

var relacionalRouter = require('./routes/relacional.routes');
var no_relacionalRouter = require('./routes/no_relacional.routes');

var app = express();

// Instaciando la Base de datos Relacional y no relacional
const dbRelacional = require("./models");
dbRelacional.sequelize.sync();

const dbNoRelacional = require("./collections");

// Instaciando cors para conectar puertos
var corsOptions = {origin: "http://localhost:4200"};
app.use(cors(corsOptions)); 

// Instanciando body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Estableciendo rustas
app.use('/relacional', relacionalRouter);
app.use('/norelacional', no_relacionalRouter);

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
