import React from "react";
import '../styling/Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <tr className="table-row">
        <th><img src={this.props.pictureUrl} className="foto" alt="Foto"/></th>
        <th>{this.props.name}</th>
        <th>{this.props.popularity.toFixed(2)}</th>
        <th><button>Delete</button></th>
      </tr>
    );
  }
}

export default Contact;
