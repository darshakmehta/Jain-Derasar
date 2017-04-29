var dispatcher = require("../dispatcher");
var derasarService = require("../services/derasarService");

function DerasarStore() {
    var listeners = [];
    /*var derasars = [{ name: "Sammet Shikhar",   description:" A wonderful derasar" }, 
                    { name: "Antarikshji",description:"An awesome derasar" }, 
                    { name: "Pydhonie", description:"An excellent derasar" },
                    {name:"Palitana",description:"this is a wonderful derasar"},
                    {name:"Girnar",description:"Another Great derasar"}];*/

    function onChange(listener) {
        getDerasars(listener);
        listeners.push(listener);
    }

    function getDerasars(cb){
        derasarService.getDerasars().then(function (res) {      //use .then whenever you're going to do something with the result (even if that's just waiting for it to finish) and use .done whenever you aren't planning on doing anything with the result.
            cb(res);
        });
    }
    
    function addDerasar(derasar) {
        derasarService.addDerasar(derasar).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteDerasar(derasar) {
        derasarService.deleteDerasar(derasar).then(function (res) {
            console.log(res);
            triggerListeners(); //Store Calls [Piece of puzzle] which tells UI renderer to update.
        });
    }

     function triggerListeners() {
        getDerasars(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "derasar") {
            switch (split[1]) {
                case "addDerasar":
                    addDerasar(payload.derasar);
                    break;
                case "deleteDerasar":
                    deleteDerasar(payload.derasar);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = DerasarStore();