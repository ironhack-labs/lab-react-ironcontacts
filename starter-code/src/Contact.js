import React, { Component } from 'react'

export default class Contact extends Component {
  render() {



    return (
      
        <tr>
        <td><img src={this.props.picture}></img></td>
        <td>{this.props.name} </td>
        <td>{this.props.popularity}</td>
        <td><button onClick={()=>{this.props.deletebtn(this.props.idx)}}>delete</button></td>
        </tr>

      
    )
  }
}