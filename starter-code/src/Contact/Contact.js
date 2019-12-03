import React, { Component } from "react";

export default class Contact extends Component {
    
    calc(){
        this.props.callback(this.props.contact.id);
    }
  render() {
      
    return (
        <tr>
          <td><img className="imgActor" src={this.props.contact.pictureUrl} alt={this.props.contact.name}/></td>
          <td>{this.props.contact.name}</td>
          <td>{this.props.contact.popularity}</td>
          <td><button onClick={() => this.calc()}>Delete</button></td>
        </tr>
        
    );
  }
}
