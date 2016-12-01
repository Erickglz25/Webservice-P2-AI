var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({ 
 name: { type: String },
 email: { type: String },
 genre: { type: String, enum: ['male', 'female'] }
});

module.exports = mongoose.model('Employee', employeeSchema);