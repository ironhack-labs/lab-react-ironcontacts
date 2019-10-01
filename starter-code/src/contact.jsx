import React, { Component } from "react";

export default class Contact extends Component {
  

  render() {
    return (
  
        <tr>
            <td><img src={this.props.pictureUrl}/></td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity}</td>
            <td><button onClick={this.props.delete}>Delete</button></td>
        </tr>
  
    );
  }
}
