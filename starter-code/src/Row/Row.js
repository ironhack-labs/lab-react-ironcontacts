import React, { Component } from 'react'

export default class Row extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.pictureUrl} alt="Fran guapo" ></img></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
            </tr>
        )
    }
}
