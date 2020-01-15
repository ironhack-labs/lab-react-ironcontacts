import React, { Component } from 'react';
import './style.css'
class Contact extends Component {
  render() {
    return (
      <tr>
        <td><img className='thumbnail' src={this.props.pictureUrl} alt='contact'/></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    )
  }
}

export default Contact;