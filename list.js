var mongoose = require('mongoose');//don't forget to require mongoose here since we need the mongoose library to create our schema.

var listSchema = mongoose.Schema ({
		Plan = String,
	});

var List = mongoose.("List", listSchema); //this variable is holdting the listSchema now. We need to export this to be able to
//to use it on server

module.exports = List;