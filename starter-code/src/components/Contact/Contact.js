import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Contact;