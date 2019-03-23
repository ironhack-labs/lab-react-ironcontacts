import React, { Component } from 'react';


class Contact extends Component {

  handleDelete = (e) => {
    this.props.deleteContact(this.props.index);
  }

  render() {
    const { img, name, popularity} = this.props
    return (
       <li className="contact-elements">
         <img className="img" src={ img } alt=""/>
         <p>{ name }</p>
         <p>{ popularity}</p>
         <button onClick={this.handleDelete}>Delete</button>
       </li>
    )
  }
}

export default Contact;