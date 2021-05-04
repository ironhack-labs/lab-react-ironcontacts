import { Component } from 'react'
import contacts from './contacts.json'
import ContactCard from "./ContactCard"

import "./FiveContacts.css"

class FiveContactsList extends Component {

    constructor() {
        super()
        this.allContacts = contacts
        this.state = { contacts: contacts.slice(0, 5) }
    }

    addContact() {
        let index = Math.floor(Math.random() * this.allContacts.length - 1)
        this.state.contacts.push(this.allContacts[index])
        this.setState({
            contacts: this.state.contacts
        })
    }

    sortByPopularity() {
        this.setState({
            contacts: this.state.contacts.sort(function (a, b) {
                return (b.popularity - a.popularity)
            })
        })
    }

    sortByName() {
        this.setState({
            contacts: this.state.contacts.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1
                } else {
                    return 1
                }
            })
        })
    }

    deleteContact(contactId) {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {

        return (

            <section>

                <h2>IronContacts</h2>

                <article>
                    <div className="buttons">
                        <button onClick={() => this.addContact()}>Add Random Contact</button>
                        <button onClick={() => this.sortByName()}>Sort By Name</button>
                        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
                    </div>

                    <div className="titles">
                        <span><strong>Picture</strong></span>
                        <span><strong>Name</strong></span>
                        <span><strong>Popularity</strong></span>
                    </div>
                    {
                        this.state.contacts.map((elm) => <ContactCard key={elm.id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} deleteContact={() => this.deleteContact(elm.id)} />)
                    }

                </article>

            </section >

        )
    }
}

export default FiveContactsList