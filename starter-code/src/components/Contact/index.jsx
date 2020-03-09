import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { name, pictureUrl, popularity, id, onClick} = this.props;

    return (
        <tr className="contact">
            <td><img src={pictureUrl} alt={name}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={onClick}>Delete</button></td>
        </tr>
    );
  }
}

export default Contact;
