import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.picture} alt=""/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button onClick={this.props.deleteContact}>Delete</button></td>
            </tr>
        )
    }
}
