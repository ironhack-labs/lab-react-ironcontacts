import React, { Component } from 'react';
import "./Description.css"

class Description extends Component {

  render() {
    return (
      <tr className="Description">
        <td><img src={this.props.img} className="img" alt="img" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>  
        <td>{this.props.children}</td>
      </tr>
    )
  }
}

export default Description;
