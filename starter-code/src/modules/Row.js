import React, { Component } from 'react';


class Row extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div>
      <ul className="list-group list-group-horizontal-lg">
        <li className="list-group-item col-lg-3"><img src={this.props.picture} height="250" width="150"></img></li>
        <li className="list-group-item col-lg-3">{this.props.name}</li>
        <li className="list-group-item col-lg-3">{this.props.popularity}</li>
        <li className="list-group-item col-lg-3"><button onClick={this.props.clicktoDelete}>Delete</button></li>
      </ul>  
    </div>    
    )
  }
}

export default Row;