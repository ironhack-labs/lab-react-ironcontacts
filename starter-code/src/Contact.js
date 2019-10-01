import React, { Component } from 'react'
import './stylesheets/contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-comp">
        <img src={this.props.pictureUrl} alt={this.props.name +" photo"} />
        <h3>{this.props.name}</h3>
        <h3>{this.props.popularity}</h3>
        <button onClick={this.props.onClick}>Delete</button>
      </div>
    )
  }
}