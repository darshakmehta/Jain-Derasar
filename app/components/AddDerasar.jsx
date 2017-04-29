var React = require("react");
var actions = require("../actions/DerasarActions");

class AddDerasar extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addDerasar = this.addDerasar.bind(this);
    this.state = {name:"",
          description:""};
  }
  addDerasar(e){
        e.preventDefault();
        actions.addDerasar(this.state);
  }
  handleChange(e){
      e.preventDefault(); // to avoid page refresh
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
  }
  render(){
     return(
            <form className="form" onSubmit={this.addDerasar}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Derasar Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Derasar Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="description">Description:</label>
                    <input type="text" className="form-control" id="description" name="description" value={this.state.address} onChange={this.handleChange} placeholder="Description" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Derasar</button>
                </div>
            </form>
        );
  }
}
export default AddDerasar;
