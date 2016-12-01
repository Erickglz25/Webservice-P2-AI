var express = require('express');
var bodyParser = require('body-parser');
var methodOverrride = require('method-override');
var mongoose = require('mongoose');

var app = express();
var employees = express.Router();

mongoose.connect('mongodb://localhost/employees');
var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection Success');
});

var employeeCtrl = require('./controllers/employee');
//var models = require('./models/client')(app, mongoose);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverrride());
app.use('/api',employees);

app.get('/', function(req, res) {
	res.send('Hello World');
});


employees.route('/employees')
.get(employeeCtrl.findAll)//ok
.post(employeeCtrl.add);

employees.route('/employees/:id')
.get(employeeCtrl.findById)//ok
.put(employeeCtrl.update)
.delete(employeeCtrl.delete);//ok


var server = app.listen(3000, function() {
	console.log('Express server listening in port ' + server.address().port);
})