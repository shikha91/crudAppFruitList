var createError = require('http-errors');
 var express = require('express');
 var path = require('path');
 var bodyParser = require('body-parser');
 
 var mysql = require('mysql');
 var connection  = require('./database');
 
 var fruitlistRouter = require('./routes/fruitlist');
 
 var app = express();
 
// view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');
 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));
 app.use('/fruit-list', fruitlistRouter);
 app.listen(3000);

module.exports = app;