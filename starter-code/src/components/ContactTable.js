import React, { Component } from 'react';


class ContactTable extends Component {
  render()  {
    const { image, name, popularity} = this.props;
    return (
      <tr className="profile-box">
        <td><img className="profile-image" src={ image } alt="profile"/></td>
        <td>{ name }</td>
        <td>{ popularity }</td>
      </tr>
    )
  }
}

export default ContactTable;