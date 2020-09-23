import React, { Component } from 'react'

export default class ContactsTable extends Component {
    render() {
        return (
            <tbody> 
                { this.props.contacts.map(contact => {
                return (
                    <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} style={{width: '100px'}}/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    </tr>
                )
            })
            }
            </tbody>
        )
    }
}