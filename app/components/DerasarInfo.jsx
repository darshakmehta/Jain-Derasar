var React = require("react");
var AddDerasar = require("./AddDerasar.jsx").default;
var actions = require("../actions/DerasarActions");

class DerasarInfo extends React.Component {
    constructor(props){
        super(props);
    this.deleteDerasar = this.deleteDerasar.bind(this);        
    }
    deleteDerasar(e){
        e.preventDefault();
        actions.deleteDerasar(this.props.info);
    }
    render(){
        return (
                <div className = "panel panel-default">
                    <div className = "panel-heading">
                        {this.props.info.name}
                         <span className="pull-right text-uppercase delete-button" onClick={this.deleteDerasar}>&times;</span>
                    </div>
                    <div className = "panel-body">
                        {this.props.info.description}
                    </div>
                </div>
            );
    }
}

export default DerasarInfo;