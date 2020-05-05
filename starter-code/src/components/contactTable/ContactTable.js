import React, { Component } from 'react'
import contacts from '../../contacts/contacts.json'
import Contact from '../contact/Contact'
import './ContactTable.css'

class ContactTable extends Component {

    constructor() {
        super()
        this.state = {
            contactList: [...contacts].splice(0, 5),
            popularityDecrementOrder: true,
            alphabeticOrder: true
        }

    }


    addRandomContact = () => {
        const contactsCopy = [...this.state.contactList]
        let contact
        do {
            contact = contacts[Math.floor(Math.random() * contacts.length)]
        } while (this.state.contactList.includes(contact))
        contactsCopy.push(contact)

        this.setState({ contactList: contactsCopy })
    }

    //This method will be used in Arrays's sort methods
    compare = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0

    sortByName = () => {
        const contactsCopy = [...this.state.contactList]

        contactsCopy.sort((a, b) => this.state.alphabeticOrder ?
            this.compare(b.name.toLowerCase(), a.name.toLowerCase()) :
            this.compare(a.name.toLowerCase(), b.name.toLowerCase()))

        this.setState({ contactList: contactsCopy })
        this.setState({ alphabeticOrder: !this.state.alphabeticOrder })
    }

    sortByPopularity = () => {
        const contactsCopy = [...this.state.contactList]

        contactsCopy.sort((a, b) => this.state.popularityDecrementOrder ?
            this.compare(b.popularity, a.popularity) :
            this.compare(a.popularity, b.popularity))

        this.setState({ contactList: contactsCopy })
        this.setState({ popularityDecrementOrder: !this.state.popularityDecrementOrder })
    }

    removeContact = index => {
        const contactsCopy = [...this.state.contactList]
        contactsCopy.splice(index, 1)
        this.setState({ contactList: contactsCopy })
    }

    render() {
        return (
            <section className="contact-table">
                <header>
                    <button onClick={this.addRandomContact}>Add Random Contact</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPopularity}>Sort by popularity</button>
                    <article className="table-header">
                        <h2 className="small">Picture</h2>
                        <h2>Name</h2>
                        <h2>Popularity</h2>
                        <h2 className="small">Action</h2>
                    </article>
                </header>
                {this.state.contactList.map((elm, index) => <Contact key={index} {...elm} removeContact={() => this.removeContact(index)} />)}
            </section>
        )
    }
}


export default ContactTable