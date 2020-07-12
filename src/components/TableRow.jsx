import React, { Component } from 'react'

export class TableRow extends Component {
    render() {
        return (
            <tr>
                <td className='contact-picture'><img src={this.props.pictureUrl} alt={this.props.name} /></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity.toFixed(2)}</td>
            </tr>
        )
    }
}

export default TableRow
