import './ContactsTable.css'

import { Component } from 'react'

import ContactRow from './ContactRow'
import contacts from "./../contacts.json"

class ContactsTable extends Component {
    constructor() {
        super()
        this.state = {
            contacts,
            numberOfContactsDisplayed: 5,
            displayedContacts: contacts.filter((elm, i) => i < 5)
        }
    }

    addRandomContact() {
        const randomIndex = Math.floor(Math.random() * (this.state.contacts.length - this.state.numberOfContactsDisplayed)) + this.state.numberOfContactsDisplayed
        const randomContact = contacts[randomIndex]

        const contactsCopy = [...this.state.displayedContacts]
        contactsCopy.push(randomContact)

        this.setState({
            numberOfContactsDisplayed: this.state.numberOfContactsDisplayed + 1,
            displayedContacts: contactsCopy
        })
    }

    sortByName() {
        const contactsSorted = [...this.state.displayedContacts]
        contactsSorted.sort((a, b) => {
            if (a.name < b.name) { return -1 }
            else if (a.name > b.name) { return 1 }
            else { return 0 }
        })

        this.setState({
            displayedContacts: contactsSorted
        })
    }

    sortByPopularity() {
        const contactsSorted = [...this.state.displayedContacts]
        contactsSorted.sort((a, b) => b.popularity - a.popularity)

        this.setState({
            displayedContacts: contactsSorted
        })
    }

    deleteContact(contactId) {
        this.setState({
            numberOfContactsDisplayed: this.state.numberOfContactsDisplayed - 1,
            displayedContacts: this.state.displayedContacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {
        return (
            <>
                <div className="buttons">
                    <button onClick={() => this.addRandomContact()}>Add Random Contact</button><small>or</small>
                    <button onClick={() => this.sortByName()}>Sort By Name</button><small>or</small>
                    <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.displayedContacts.map(elm => this.state.numberOfContactsDisplayed && <ContactRow {...elm} deleteContact={() => this.deleteContact(elm.id)} key={elm.id} />)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ContactsTable