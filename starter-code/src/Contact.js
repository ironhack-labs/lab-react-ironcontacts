import React, { Component } from 'react'

export default class Contact extends Component {

  render() {
   const {name, pic, popularity} = this.props
    return (
      <React.Fragment>
        <tr>
        <td><img src={pic} width= "40" alt=""/></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={this.props.removeActor}>Delete</button></td>
      </tr>
      </React.Fragment>
    )
  }
}
