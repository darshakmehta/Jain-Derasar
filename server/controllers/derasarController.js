var mongoose = require("mongoose");
var Derasar = require("../data/derasar");
var _ = require("underscore"); //easy to focus on application's logic
var express = require("express");
var router = express.Router();

router.route("/derasars/:id?").get(getDerasars).post(addDerasar).delete(deleteDerasar);

function getDerasars(req, res) {
    Derasar.find(function (err, derasars) {
        if (err)
            res.send(err);
        else
            res.json(derasars);
    });
}

function addDerasar(req, res) {
    var derasar = new Derasar(_.extend({}, req.body)); //req.body object get's populated by the body-parser middleware || undercore's extend utility function which copies the req.body object to an empty object to populate our model.
    derasar.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(derasar);
    });
}

function deleteDerasar(req, res) {
    var id = req.params.id;
    Derasar.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;