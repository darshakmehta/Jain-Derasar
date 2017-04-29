var React =  require("react");
var DerasarInfo = require("./derasarinfo.jsx").default;
var AddDerasar = require("./AddDerasar.jsx").default;

class DerasarList extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className="row">
	                <div className="col-md-6">
	                    <AddDerasar />
	                </div>
	                <div className="col-md-6">
	                    {
	                        this.props.derasars.map(function(s,index){
	                            return(
	                                <DerasarInfo info={s} key={"derasar"+index} />
	                            )         
	                        })
	                    }
	                </div>
	           	</div>
			);
	}
}

export default DerasarList;