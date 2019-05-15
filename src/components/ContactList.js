import React, { Component } from 'react'

export default class ContactList extends Component {


    render() {
    
        const { name, pictureUrl, popularity } = this.props.contacts;
    return (
      <li>
        <img src={pictureUrl}></img>
        <h1>{name}</h1>
        <h2>{popularity}</h2>
      </li>
    )
  }
}
