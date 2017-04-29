var React = require("react");
var ReactDOM = require("react-dom");
var DerasarList = require("./components/derasarlist.jsx").default;
var derasarsStore = require("./stores/derasarsStore");
var _derasars = [];
var getDerasarsCallback = function(derasars){			//callback to fetch data one by one
    _derasars = derasars;
    render();
};

derasarsStore.onChange(getDerasarsCallback);	//first instance to fetch data

function render(){
    ReactDOM.render(<DerasarList derasars={_derasars} />, document.getElementById("container"));    
}

render();


