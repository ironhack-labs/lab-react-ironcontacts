import React, { Component } from 'react'
import './ContactList.css';


export default class ContactList extends Component {


  render() {
    return (
      
      <div className="contactList">
        <img src={this.props.pictureUrl} alt="imagen"></img>
        <p>{this.props.name}</p>
        <p>{this.props.popularity}</p>
        <button onClick={() => this.props.delete(this.props)}>Delete</button>
          </div>
    )
  }
}
