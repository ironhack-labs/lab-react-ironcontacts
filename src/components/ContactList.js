import React, { Component } from 'react'

export default class ContactList extends Component {

handleDelete = (e) => {
  this.props.delete(this.props.key);
}

    render() {
    
        const { name, pictureUrl, popularity } = this.props.contacts;
    return (
    <ul>
      <li>
        <img src={pictureUrl}></img>
        <h1>{name}</h1>
        <h2>{popularity}</h2>
      </li>
      <button onClick={this.handleDelete}>Delete contact</button>
    </ul>
    )
  }
}
