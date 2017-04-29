var express = require("express");	//include express modules
var bodyParser = require("body-parser"); //body-parser module is needed to parse http request's body since express.js does not have an in built support for this || bodyparser to parse json payloads on http requests
var mongoose = require("mongoose"); //document object mapper --> we will use it to interact with mongodb in our application
var path = require("path");			//include path modules

//controllers 
var derasarController = require("./controllers/derasarController");

//Express request pipeline
var app = express();				//create a express app
app.use(express.static(path.join(__dirname,"../app/dist")));  //It serves static files from app/dist
app.use(bodyParser.json());
app.use("/api", derasarController);

var port = 7777;
app.listen(port,function(){
	console.log("Started listening on port",port);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/derasar");