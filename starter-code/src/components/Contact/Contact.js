import React, { Component } from 'react'
import Button from '../Button/Button'

export default class Contact extends Component {
  render() {
    return (
      <tr className="contact">
        <td className="contact-picture"><img src={this.props.pictureUrl} alt={`${this.props.name} profile`}/></td>
        <td className="contact-name">{this.props.name}</td>
        <td className="contact-popularity">{this.props.popularity.toFixed(2)}</td>
        <td className="contact-delete">
          <Button clickHandler={this.props.delete}>Remove</Button>
          <Button clickHandler={this.props.removeAllButOne}>Keep just this</Button>
        </td>
      </tr>
    )
  }
}
