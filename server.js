var express = require('express');

var index = require('./routes/index');

var app = express();

app.use(express.static('public'));



app.use('/', index);

app.get('/students', function (request, respond){
  var students = [
  "Andrew Kolander",
  "Anthony Maki",
  "Brian Anderson",
  "Brian Verduzco",
  "Connor O'Gara",
  "Cormac Strahan",
  "Donovan Goertzen",
  "Hillary Manning",
  "Jon Wilson",
  "Justin Doty",
  "Katie Vogel",
  "Kyle Quamme",
  "Liz Kerber",
  "Megan Martinson",
  "Richard Camara",
  "Ryan Mattson",
  "Sahasha Reese",
  "Tracy Vincent",
  "Trent Johnson"
];
respond.send(students);

});

var server = app.listen(3000, handleServerStart);

function handleServerStart() {
  var port = server.address().port;
  console.log('Listening on port', port);
}
