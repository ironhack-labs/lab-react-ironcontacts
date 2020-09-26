import React, { Component } from 'react'
import contacts from '../../contacts.json';

export default class Contacts extends Component {
    state = {
        currentContacts: contacts.slice(0, 5)
    }

    addContact = newContact => {
        const currentContactsCopy = [...this.state.currentContacts]
        currentContactsCopy.push(newContact)
        this.setState({
            currentContacts: currentContactsCopy
        })
    }

    getRandomContact = () => {
        return contacts[Math.floor(Math.random() * contacts.length)]
    }

    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                {
                    this.state.currentContacts.map((contact) => {
                        return (
                            <div key={contact.id}>
                                <img width="50" src={contact.pictureUrl} />
                                {contact.name} |
                                {contact.popularity.toFixed(2)} |
                            </div>
                        )
                    })
                }
                <button onClick={() => { this.addContact(this.getRandomContact()) }}>Add new random contact</button>
            </div>
        )
    }
}