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

    sortByName = () => {
        const currentContactsCopy = [...this.state.currentContacts]
        currentContactsCopy.sort((a, b) => a.name > b.name ? 1 : -1)
        this.setState({
            currentContacts: currentContactsCopy
        })
    }

    sortByPopularity = () => {
        const currentContactsCopy = [...this.state.currentContacts]
        currentContactsCopy.sort((a, b) => b.popularity - a.popularity)
        this.setState({
            currentContacts: currentContactsCopy
        })
    }

    delete = index => {
        const currentContactsCopy = [...this.state.currentContacts]
        currentContactsCopy.splice(index,1)
        this.setState({
            currentContacts: currentContactsCopy
        })
    }

    render() {
        return (
            <div>
                <h1>IronContacts</h1>

                <button onClick={() => { this.addContact(this.getRandomContact()) }}>Add new random contact</button>

                <button onClick={() => { this.sortByName() }}>Sort by name</button>

                <button onClick={() => { this.sortByPopularity() }}>Sort by popularity</button>

                <br /><br />
                {
                    this.state.currentContacts.map((contact, index) => {
                        return (
                            <div key={contact.id}>
                                <img width="50" src={contact.pictureUrl} />
                                {contact.name} |
                                {contact.popularity.toFixed(2)}
                                <button onClick={() => { this.delete(index) }}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}