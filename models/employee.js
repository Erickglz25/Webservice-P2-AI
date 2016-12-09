var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({ 
 name: String ,
 lastname: String ,
 age: Number ,
 address: String ,
 phone: String ,
 email: String ,
 position: String ,
 salary: Number ,
 ssn: Number  
});

module.exports = mongoose.model('Employee', employeeSchema);