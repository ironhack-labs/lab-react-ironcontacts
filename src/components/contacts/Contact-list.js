import React, { Component } from 'react'

import contacts from './../contacts.json'

import ContactCard from './Contact-card'

export default class ContacList extends Component {

    // CONSTRUCTOR
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    // GET RANDOM CONTACT
    getRandomContact = () => {
        const allContacts = [...this.state.contacts]
        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        allContacts.push(randomContact)
        this.setState({ contacts: allContacts })
    }

    // SORT BY NAME
    sortByName = () => {
        const allCopy = [...this.state.contacts]
        const sortCopy = allCopy.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        this.setState({ contacts: sortCopy })
    }

    // SORT BY NAME
    sortByPopularity = () => {
        const allCopy = [...this.state.contacts]
        const sortCopy = allCopy.sort((a, b) => {
            return b.popularity - a.popularity
        })
        this.setState({ contacts: sortCopy })
    }

    // DELETE EACH
    deleteContact = id => {
        const allCopy = [...this.state.contacts]
        allCopy.splice(elm.id, 1)
        this.setState({ contacts: allCopy })

    }

    // RENDER
    render() {
        const contactList = this.state.contacts.map(contact => <ContactCard key={contact.id} contact={contact} remove={() => this.deleteContact(contact.id)}></ContactCard>)

        return (
            <>
                <h1>IronContacts</h1>
                <button onClick={this.getRandomContact}> Random</button>
                <button onClick={this.sortByName}> Sort by name</button>
                <button onClick={this.sortByPopularity}> Sort by popularity</button>
                <table align="center">
                    <thead>
                        <tr>
                            <th> Picture</th>
                            <th> Name</th>
                            <th> Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList}
                    </tbody>

                </table>
            </>
        )
    }
}