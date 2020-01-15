import React, { Component } from 'react';
import './style.css'
class Contact extends Component {
  render() {
    return (
      <tr>
        <td><img className='thumbnail' src={this.props.pictureUrl} alt='contact'/></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button data-index={this.props.index} onClick={this.props.deleteFunc} >Delete</button></td>
      </tr>
    )
  }
}

export default Contact;