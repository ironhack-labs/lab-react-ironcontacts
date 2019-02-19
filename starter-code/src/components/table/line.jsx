import React, {Component} from "react";
import "./line.css";
import ButtonDelete from "../buttons/buttonDelete";

class Line extends Component {
  render() {
    return (
      <tr key={this.props.contact.index}>
        <td><img className="imgFamous" src={this.props.contact.pictureUrl} /></td>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.popularity.toFixed(2)}</td>
        <td><ButtonDelete onClick={() => this.props.deleteContacts(this.props.contact.name)}>Delete</ButtonDelete></td>
      </tr>
    )}
  }

  export default Line;