import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.contact.pictureUrl} alt="Profile icon" /> </td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => {this.props.deleteHandler(this.props.contact.id)}} className="btn-delete">Delete</button></td>
            </tr>
        )
    }
}
