import React, { Component } from 'react'
import contacts from '../../contacts.json';

export default class Contacts extends Component {
    render() {
        const fiveContacts = [...contacts].slice(0, 5)
        return (
            <div>
                <h1>IronContacts</h1>
                {
                    fiveContacts.map((contact) => {
                        return <div key={contact.id}> <img width="50" src={contact.pictureUrl} /> {contact.name} | {contact.popularity.toFixed(2)}</div>
                    })
                }
            </div>
        )
    }
}