var express = require('express');
var app 	= express();
var mongoose = require('mongoose');
var list 	= require('./model/list.js');	//when creating own file with the mongoose schema inside we need to require it.
var bodyparser = require('body-parser');
mongoose.connect("mongodb://localhost/listdb");
//remember that the list with the mongoose model should be inside a model folder


//connect to mongoose


app.set(express.static('public'));

//Middleware
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//it populates req.body with (among other things) the value of the POST parameters. Here's the doc and examples: http://expressjs.com/api.html#req.body
//As you can see, it's simply a thin wrapper that tries to decode JSON, 
//if fails try to decide URLEncoded, and if fails try to decode Multi-Part.
//If you only specify json and urlencoded middlewares, the form data won't be parsed by any middleware, 
//thus req.body won't be defined. You then need to add a middleware that is able to parse 
//form data such as formidable, busboy or multiparty (as stated in connect's documentation).


//Connect it to localhost
app.listen(3000);