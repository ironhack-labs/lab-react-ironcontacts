import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, pictureUrl, popularity, AppFunction } = this.props;

    return (
      <tr>
        <td><img src={pictureUrl} alt={name}/></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={() => AppFunction(this.props)}>Delete</button></td>
      </tr>
    );
  }
}

export default Contact;
