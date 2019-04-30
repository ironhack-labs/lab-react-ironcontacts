import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
        <tr className="table">
            <td ><img src={this.props.pictureUrl} height="110"alt=""/></td>
            <td >{this.props.name}</td>
            <td >{this.props.popularity}</td>
            <td ><button className="btnremove" onClick={this.props.removeContact}> Remove</button></td>
        </tr>
          
            
        )
    }
}