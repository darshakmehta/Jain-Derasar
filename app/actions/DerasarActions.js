var dispatcher = require("../dispatcher");

module.exports = {
    addDerasar:function(derasar){
        dispatcher.dispatch({
           derasar:derasar,
           type:"derasar:addDerasar" 
        });
    },
    deleteDerasar:function(derasar){
        dispatcher.dispatch({
           derasar:derasar,
           type:"derasar:deleteDerasar" 
        });
    }
}