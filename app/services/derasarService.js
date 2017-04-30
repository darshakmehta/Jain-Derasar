//This file contains REST APIs calls
var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "https://jain-derasar.herokuapp.com/api/derasars";
//var resourceUrl = "http://localhost:7777/api/derasars";

module.exports = {
    addDerasar: function (derasar) {
        var Promise = promise.Promise;      // promise represents the result of an asynchronous operation
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(derasar),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getDerasars: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteDerasar: function (derasar) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + "/" + derasar._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}