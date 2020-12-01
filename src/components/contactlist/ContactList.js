import React, { Component } from 'react'
import contacts from '../contacts.json'
import './ContactList.css'
import ContactCard from './ContactCard'
import Button from '../button/Button'

class ContactList extends Component {
    constructor(){
        super()
        this.state = {
            displayContacts: contacts.slice(0, 5),
            isSortedByName: false,
            isSortedByPopularity: false,
        }
        this.numberOfContacts = 5
    }

    addNewContact = () => {
        this.numberOfContacts++
        this.setState({displayContacts: contacts.slice(0,this.numberOfContacts)})
    }

    sortByName = () => {
        this.setState({isSortedByName: true, isSortedByPopularity: false})
    }
    sortByPopularity = () => {
        this.setState({isSortedByName: false, isSortedByPopularity: true})
    }

    render() {
        const filteredContactsByName = [...this.state.displayContacts].sort((a, b) => a.name.localeCompare(b.name))
        const filteredContactsByPopularity = [...this.state.displayContacts].sort((a, b) => b.popularity - a.popularity)

        const listOfContacts = this.state.isSortedByName ? filteredContactsByName : this.state.isSortedByPopularity ? filteredContactsByPopularity : this.state.displayContacts
        return (
            <section className="list-container">
            <h1>Iron Contacts</h1>
            <article>
                <Button name="Add a random contact" action={this.addNewContact}/>
                <Button name="Sort by name" action={this.sortByName}/>
                <Button name="Sort by popularity" action={this.sortByPopularity}/>
            </article>
            <table >
                <thead>
                   <tr>
                   <th>Picutre</th>
                   <th>Name</th>
                   <th>Popularity</th>
                   </tr>
                   { listOfContacts.map(elm => <ContactCard key={elm.id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>)}
                </thead>
            </table>
            </section>
        )
    }
}

export default ContactList