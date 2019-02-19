import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <tr className>
        <td><img src={this.props.pictureUrl} alt="" width="100" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button className="button is-danger" onClick={this.props.deleteContactProp}>Delete</button></td>
      </tr>
    )
  }
}
