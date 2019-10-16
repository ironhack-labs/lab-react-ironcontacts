import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>
          <button onClick={this.props.deleteContact}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Contact;
