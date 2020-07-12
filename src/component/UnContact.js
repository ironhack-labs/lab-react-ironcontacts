import React, { Component } from 'react'

class UnContact extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img className="imagen-tabla" src={this.props.contact.pictureUrl} alt="contact" />
                </td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.popularity}</td>
                <td><button onClick={this.props.clickToRemove}>DELETE</button></td>
            </tr>
        )
    }
}

export default UnContact
