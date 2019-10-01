
import React, { Component } from 'react'

export default class Contact extends Component {
 
 
  render() {
    return (
        <tr className="card-container">
          <td><img src={this.props.pictureUrl} /></td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
          <button onClick={()=>this.props.delete(this.props)}>Delete</button>
        </tr>
      

    )
  }
}