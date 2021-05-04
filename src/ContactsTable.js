import { Component } from 'react'
import contactsFromAPI from "./contacts.json"
import ContactCard from './ContactCard'

import './ContactsTable.css'

class ContactsTable extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contactsFromAPI.slice(0, 5)
        }
    }

    addRandomContact() {
        const max = this.state.contacts.length
        const min = 5
        const randomContactNum = Math.floor(Math.random() * max) + min
        const randomContact = contactsFromAPI[randomContactNum]

        const newContactsList = JSON.parse(JSON.stringify(this.state.contacts))
        newContactsList.push(randomContact)

        this.setState({
            contacts: newContactsList
        })
    }

    sortByName() {
        const sortedName = JSON.parse(JSON.stringify(this.state.contacts))
        sortedName.sort((a, b) => (a.name < b.name) ? -1 : 1)
        
        this.setState({
            contacts: sortedName
        })
    }

    sortByPopularity() {
        const sortedPop = JSON.parse(JSON.stringify(this.state.contacts))
        sortedPop.sort((a, b) => (b.popularity - a.popularity))

        this.setState({
            contacts: sortedPop
        })
    }

    deleteContact(contactId) {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }

    
    render() {

        return (

            <section className="contacts-table">
                <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
                <button onClick={() => this.sortByName()}>Sort by Name</button>
                <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.contacts.map(elm =>
                                <ContactCard
                                    deleteOneContact = {() => this.deleteContact(elm.id)}
                                    key = { elm.id }
                                    pictureUrl = { elm.pictureUrl }
                                    name = { elm.name }
                                    popularity = { elm.popularity }
                                />)
                        }
                    </tbody>
                </table>

            </section>
        )
    }
}

export default ContactsTable