import React, { Component } from 'react';
import "./Contact.css"

class Contacts extends Component {
  render() {
    return (
         <tr>
            <td><img src={this.props.pictureUrl} alt=""/></td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity}</td>
            <td>{this.props.id}</td>
            <td><button onClick={() => this.props.clickToDelete()}>Delete me</button>
</td>
         </tr>

    )}
}
export default Contacts;

