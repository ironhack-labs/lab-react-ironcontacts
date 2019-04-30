import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <tr className="contact">
          <td><img src={this.props.pictureUrl} height="150px"/></td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
        </tr>
      </div>
    )
  }
}

export default Contact