import React, { Component } from 'react';


class ContactTable extends Component {
  render()  {
    const { image, name, popularity, buttonFunction } = this.props;
    return (
      <tr className="profile-box">
        <td><img className="profile-image" src={ image } alt="profile"/></td>
        <td>{ name }</td>
        <td>{ popularity }</td>
        <td><button className="buttons" onClick={ buttonFunction }>Delete profile</button></td>
      </tr>
    )
  }
}

export default ContactTable;