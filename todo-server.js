/**
 * Created by littleworld on 21/02/16.
 */

  /* 

aantekeningen Nieuwe mongoose app

 mongoose schema, is create table. 


mongoose model genaamd todo , is een klasse

todo.find => haalt alles op uit de database

 */


var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/todo');
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('todo app on port 3000');
});

require('./app/routes')(app);



