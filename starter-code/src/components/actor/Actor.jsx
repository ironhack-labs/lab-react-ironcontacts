import React, { Component } from 'react'
import "./Actor.css"

export default class Actor extends Component {
  render() {
    return (
    <React.Fragment>
            <tr>
              <td><img src={this.props.pictureUrl} alt="" /></td>
              <td>{this.props.name}</td>
              <td>{this.props.popularity}</td>
              <td><button onClick={() => this.props.deleteActor()}>Delete</button></td>
            </tr>
    </React.Fragment>
    )
  }
}
