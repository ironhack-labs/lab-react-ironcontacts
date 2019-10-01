import React, { Component } from 'react'
import Button from "./Button"

export default class Contact extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.celeb.name}</td>
        <td><img width="200px" src={this.props.celeb.pictureUrl} alt={this.props.name}/></td>
        <td>{this.props.celeb.popularity}</td>
        <td><Button onclick={this.props.deleteOne} name="delete"/></td>
      </tr>
    )
  }
}
