import React, { Component } from 'react'
import Button from '../Button/Button'
import "./Contact.css"

export default class Contact extends Component {
  render() {
    return (
      <tr className="contact">
        <td className="contact-picture"><div className="contact-picture-container"><img src={this.props.pictureUrl} alt={`${this.props.name} profile`}/></div></td>
        <td className="contact-name">{this.props.name}</td>
        <td className="contact-popularity"><span>★</span>{this.props.popularity.toFixed(2)}</td>
        <td className="contact-delete">
          <Button classes="button-is-secondary" clickHandler={this.props.removeAllButOne}>Keep just this</Button>
          <Button classes="button-is-danger" clickHandler={this.props.delete}>Remove</Button>
        </td>
      </tr>
    )
  }
}
