import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <tr className="classContainer">
       <td> <img className="imgStyle" src={this.props.pictureUrl} alt=""/> </td>
       <td className="name">{this.props.name}</td>
       <td>{this.props.popularity}</td>
       <button className="btnStyle" onClick={()=>this.props.deleteContactHandler(this.props.index)}>Delete</button>
      </tr>
    );
  }
}
