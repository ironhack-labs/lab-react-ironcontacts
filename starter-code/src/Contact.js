import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.pictureUrl} height="150px" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    )
  }
}

export default Contact