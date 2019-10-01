import React, { Component } from 'react'


export default class Contact extends Component {
  render() {
    return (
      <tr >
        <td><img src={this.props.pictureUrl} alt={this.props.name} /></td>
        <td>{this.props.name} </td>
        <td>{this.props.popularity}</td>
        <td>{this.props.children}</td>
        <td><button onClick={() => this.props.delete(this.props.index)}>Delete Contact</button></td>
      </tr>
    )
  }
}
