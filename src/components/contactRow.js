import React, { Component } from 'react'
import RandomButton from './randomButton';


export class ContactRow extends Component {
    render() {
        return (
            <tr>
                <td className='contact-picture'><img src={this.props.pictureUrl} alt={this.props.name} /></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity.toFixed(2)}</td>
                <td><RandomButton function='Delete' clickBtn={this.props.deleteBtn} /></td>
            </tr>
        )
    }
}

export default ContactRow