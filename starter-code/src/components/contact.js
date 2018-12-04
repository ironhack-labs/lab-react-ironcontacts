import React, { Component } from "react";
import Botton from './botton'

export default class Contact extends Component {
  render() {
    
    return (

      <tr>
        <td>
          <img style={{maxWidth:50}} src={this.props.pictureUrl} />
        </td>
        <td>
          <h3>{this.props.name}</h3>
        </td>
        <td>
          <h3>{this.props.popularity}</h3>
        </td>
        <td>
          <Botton operation={this.props.operation} name={"Delete"} index={this.props.index}/>
        </td>
      </tr>
    );
  }
}
