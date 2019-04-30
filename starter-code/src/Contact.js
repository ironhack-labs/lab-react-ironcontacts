import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.pictureUrl} height="110px" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button onClick={this.props.deleteContact} className="btnDelete">Delete Contact</button></td>
      </tr>
    )
  }
}

export default Contact