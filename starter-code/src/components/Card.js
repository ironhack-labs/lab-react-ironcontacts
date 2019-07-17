import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    return (
      <tr>
        <td><img className="img1" src={this.props.actors.pictureUrl} alt=""></img></td>
        <td className="text1">{this.props.actors.name}</td>
        <td className="text1">{this.props.actors.popularity.toFixed(2)}</td>
        <td><button className="dlt-btn" onClick={ () => {this.props.deletebtn(this.props.ind)}}>Delete</button></td>
      </tr>
    )
  }
}
 