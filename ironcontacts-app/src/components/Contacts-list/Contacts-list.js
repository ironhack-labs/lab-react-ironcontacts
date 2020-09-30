import React, { Component } from 'react'
import contacts from './../contacts'
import ContactCard from './Contacts-card'

class ContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    newContact = () => {
        const newContact = contacts[Math.floor(Math.random() * contacts.length)]
        this.setState({
            contacts: [...this.state.contacts, newContact]
        })
    }

    sortByName = () => {
        this.setState({
            contacts: [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    sortByPopularity = () => {
        this.setState({
            contacts: [...this.state.contacts].sort((a, b) => b.popularity - a.popularity)
        })
    }

    removeContact = contactID => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactID)
        })
    }

    render() {
        return (
            <>
                <h1>IronContacts</h1>
                <button onClick={this.newContact}>Random Contact</button>
                <button onClick={this.sortByName}>Sort By Name</button>
                <button onClick={this.sortByPopularity}>Sort By Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(elm => <ContactCard key={elm.id} {...elm} removeContact={() => this.removeContact(elm.id)} />)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ContactsList