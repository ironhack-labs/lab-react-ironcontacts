import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img
            width="100px"
            src={this.props.pictureUrl}
            alt={this.props.name}
          />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>
          <button onClick={this.props.clickToDelete}>Delete Contact</button>
        </td>
      </tr>
    );
  }
}

export default Contact;
