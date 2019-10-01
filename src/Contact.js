import React, { Component } from 'react';
import Celebrity from "./Celebrity";

class Contact extends Component {

    render() {
        return (
        <tr key={this.key}>
          <td className="big-p">
            <img
              src={this.props.contact.pictureUrl}
              alt={this.props.contact.name}
              className="headshot"
            ></img>
          </td>
          <td>
            <p className="big-p">{this.props.contact.name}</p>
          </td>
          <td>
            <p className="big-p">{this.props.contact.popularity.toFixed(2)}</p>
          </td>
          <td>
            <button onClick={this.props.remove}>Delete</button>
          </td>
        </tr>
        );
    }
}

export default Contact;