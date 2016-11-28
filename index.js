var express = require('express');
var bodyParser = require('body-parser');
var methodOverrride = require('method-override');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverrride());

app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(3000, function() {
	console.log('Express server listening in port ' + server.address().port);
})