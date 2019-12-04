import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactCard from '../components/ContactCard'

class ContactList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts,
            filteredContacts: contacts.slice(0, 5)
        }
    }

    randomContact = () => {
        let random = Math.floor(Math.random() * (this.state.contacts.length))
        const copyContact = [...this.state.filteredContacts]
        copyContact.push(contacts[random])
        this.setState({
            contacts: contacts,
            filteredContacts: copyContact
        })
    }

    sortName = () => {
        const sortByName = [...this.state.filteredContacts]
        sortByName.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            contacts: contacts,
            filteredContacts: sortByName
        })
    }

    sortPop = () => {
        const sortByPopularity = [...this.state.filteredContacts]
        sortByPopularity.sort(function (a, b) {
            return b.popularity - a.popularity
        })
        this.setState({
            contacts: contacts,
            filteredContacts: sortByPopularity
        })
    }

    deleteContact = id => {
        const deleteC = [...this.state.filteredContacts]
        deleteC.splice(id, 1)
        this.setState({
            contacts: contacts,
            filteredContacts: deleteC


        })
    }

    render() {
        return (
            <>
                <button onClick={this.randomContact}>Add Random Contact</button>
                <button onClick={this.sortName}>Sort by Name</button>
                <button onClick={this.sortPop}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Picture</strong></th>
                            <th><strong>Name</strong></th>
                            <th><strong>Popularity</strong></th>
                            <th><strong>Action</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredContacts.map((elm, idx) => (
                            <ContactCard key={idx} {...elm} deleteCont={() => this.deleteContact(idx)} />
                        ))}

                    </tbody>
                </table>
            </>
        )
    }

}


export default ContactList