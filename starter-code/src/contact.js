import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <tr key={this.props.id}>
            <td>
              <img src={this.props.pictureUrl} alt='' />
            </td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity.toFixed(2)}</td>
            <td><button className="delete" onClick={this.props.delete}>Delete</button></td>
          </tr>
        )
    }
}
