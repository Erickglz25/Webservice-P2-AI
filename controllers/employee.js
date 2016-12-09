
var Employee = require('../models/employee.js');

/**Add Methods*/

exports.findAll= function(req,res){
	
	Employee.find(function(error, employees){
		if (error) {
			res.send(500,err.message);	
		}
		console.log('GET /employees')
		res.status(200).jsonp(employees);
	})
	
}

exports.findById = function(req, res) { 
	
	
	Employee.findById(req.params.id, function(err, employee) {
		 if(err) return res.send(500, err.message);
		 console.log('GET /employee/' + req.params.id);
		 res.status(200).jsonp(employee);
	 });
	 
 };
 
 exports.add = function(req, res) {
 	console.log('POST');

	var employee = new Employee({
		name: req.body.name,
		lastname: req.body.lastname,
		age: req.body.age,
		address: req.body.address,
		phone: req.body.phone,
		email: req.body.email,
		position: req.body.position,
		salary: req.body.salary,
		ssn: req.body.ssn
	});

	employee.save(function(error, employee) {
		if(error) return res.send(500, error.message);
		

		res.status(200).jsonp(employee);
	});
	console.log(req.body);
	//console.log(req.body.name);
 };
 
 exports.update = function(req, res) {
	 	
	 Employee.findById(req.params.id, function(err, employee) {

		employee.name = req.body.name;
		employee.lastname = req.body.lastname;
		employee.age = req.body.age;
		employee.address = req.body.address;
		employee.phone = req.body.phone;
		employee.email = req.body.email;
		employee.position = req.body.position;
		employee.salary = req.body.salary;
		employee.ssn = req.body.ssn;
		 employee.save(function(error) {
			 if(error) return res.send(500, err.message);
			 res.status(200).jsonp(employee);
		 });
	 });
 };
 
 exports.delete = function(req, res) {
 	
 	Employee.findById(req.params.id, function(err, employee) {
		employee.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		});
	});
	
 };