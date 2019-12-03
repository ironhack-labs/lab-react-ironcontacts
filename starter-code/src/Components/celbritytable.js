import React, { Component } from 'react'

export default class celbritytable extends Component {
    render() {
        return (
            <tr>
                <td><img src = {this.props.pictureUrl} alt=" "/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button className='btn-delete' onClick={this.props.clickToDelete}>Delete</button></td>
            </tr>
        )
    }
}
