import React, { Component } from 'react';
import contacts from '../contacts.json';
import "./ContactList.css"
import Button from "../button/Button"
import Row from "../rowElement/RowElement"

class ContactList extends Component {
    constructor() {
        super()
        this.state = {
            contactsShow: contacts.slice(0, 5),
            contacts,
            isSortedByName: false,
            isSortedByPopularity: false
        }
        this.numberOfContacts = 5
    }
    addNewContact = () => {
        this.numberOfContacts++
        this.setState({ contactsShow: contacts.slice(0, this.numberOfContacts) })
    }
    sortByName = () => {
        this.setState({ isSortedByName: !this.state.isSortedByName, isSortedByPopularity: false })
        console.log("name", this.state.isSortedByName, "popularity", this.state.isSortedByPopularity)

    }
    isSortByPopularity = () => {
        this.setState({ isSortedByPopularity: !this.state.isSortedByPopularity, isSortedByName: false })
    }
    deleteContact = id => {
        const contactsShowCopy = [...this.state.contactsShow].filter(contact => contact.id !== id)
        this.setState({ contactsShow: contactsShowCopy })
    }
    render() {

        const filteredContactsByName = [...this.state.contactsShow].sort((a, b) => a.name.localeCompare(b.name))
        const filteredContactsByPopularity = [...this.state.contactsShow].sort((a, b) => b.popularity - a.popularity)

        const listToShow = this.state.isSortedByName ? filteredContactsByName
            : this.state.isSortedByPopularity
                ? filteredContactsByPopularity
                : this.state.contactsShow

        const rowElements = listToShow.map(contact =>
            <Row key={contact.id} {...contact} onClickAction={() => this.deleteContact(contact.id)} />)
        return (
            <section className="contact-list-container">
                <h1>IronContacts</h1>
                <article>
                    <Button onClickAction={this.addNewContact} className={`btn`} title="Add a random contact" />
                    <Button onClickAction={this.sortByName} className={`btn ${this.state.isSortedByName && "inactive"}`} title="Sort by Name" />
                    <Button onClickAction={this.isSortByPopularity} className={`btn ${this.state.isSortedByPopularity && "inactive"}`} title="Sort by Popularity" />
                </article>
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
                        {rowElements}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default ContactList