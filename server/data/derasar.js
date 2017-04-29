var mongoose = require("mongoose"); 
var derasarSchema = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("derasar", derasarSchema);