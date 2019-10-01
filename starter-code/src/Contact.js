import React, { Component } from 'react'

export default class Contact extends Component {

  render() {
    return (
      <tr className="contact">
        <td><img src={this.props.pictureUrl} alt="{this.props.name}"/></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    )
  }
}
