var React = require("react");
var ReactDOM = require("react-dom");
var DerasarList = require("./components/derasarlist.jsx").default;
var derasarsStore = require("./stores/derasarsStore");
var _derasars = [];
var getDerasarsCallback = function(derasars){
    _derasars = derasars;
    render();
};

derasarsStore.onChange(getDerasarsCallback);

function render(){
    ReactDOM.render(<DerasarList derasars={_derasars} />, document.getElementById("container"));    
}

render();


