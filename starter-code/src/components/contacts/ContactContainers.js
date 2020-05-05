import React, { Component } from 'react'
import contacts from '../../contacts.json'
import Contact from './Contact'
import './ContactContainers.css'

class Contacts extends Component {

    constructor() {
        super()
        this.state = {
            contacts,
            contactsCopy: [...contacts].splice(0, 5),
            contactsAvailable: true
        }
    }

    addRandomContact = () => {

        if (this.state.contactsCopy.length < contacts.length) {

            let randomContact

            do {
                randomContact = contacts[Math.floor(Math.random() * contacts.length)]

            } while (this.state.contactsCopy.filter(contact => contact.id === randomContact.id).length)

            this.state.contactsCopy.push(randomContact)
            this.setState({ contactsCopy: this.state.contactsCopy })
        }
        else { this.setState({ contactsAvailable: false }) }
    }

    sortByName = () => {

        this.state.contactsCopy.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? - 1 : 1)
        this.setState({contactsCopy: this.state.contactsCopy})
    }

    sortByPopularity = () => {

        this.state.contactsCopy.sort((a, b) => b.popularity - a.popularity)
        this.setState({ contactsCopy: this.state.contactsCopy })
    }

    deleteContact = (id) => {
        this.state.contactsCopy.splice(this.state.contactsCopy.findIndex(contact => contact.id === id), 1)
        this.setState({contactsCopy: this.state.contactsCopy})
    }

    render() {
        return (
            <>
                <div className="actions-nav">
                    <button className="action-button" onClick={this.addRandomContact}>Add Random Contact</button>
                    <button className="action-button" onClick={this.sortByName}>Sort by Name</button>
                    <button className="action-button" onClick={this.sortByPopularity}>Sort by Rating</button>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-2">
                        <h2>Picture</h2>
                    </div>
                    <div className="col-sm-2">
                        <h2>Name</h2>
                    </div>
                    <div className="col-sm-2">
                        <h2>Popularity</h2>
                    </div>
                    <div className="col-sm-2">
                        <h2>Action</h2>
                    </div>
                </div>

                {this.state.contactsCopy.map((contact, index) => <Contact key={index} deleteContact={() => this.deleteContact(contact.id)} {...contact} />)}
                <p className="error-message">
                    {!this.state.contactsAvailable && 'Sorry, no more contacts available!'}
                </p>
            </>
        )
    }
}

export default Contacts








