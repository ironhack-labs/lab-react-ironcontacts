import React, { Component } from 'react'
import './Contact.css'
import contacts from '../../contacts.json';


class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            sliceContacts: contacts.slice(0, 4),
            contacts
        }
        //this.contacts = contacts
    }

    getRandomContact = () => {
        let randomContacts = [...this.state.sliceContacts]

        randomContacts.push(this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)])

        this.setState({ sliceContacts: randomContacts })
    }

    sortByName = () => {
        let sortContacts = [...this.state.sliceContacts]

        sortContacts.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({ sliceContacts: sortContacts })
    }

    sortByPop = () => {
        let popContacts = [...this.state.sliceContacts]

        popContacts.sort((a, b) => b.popularity - a.popularity)

        this.setState({ sliceContacts: popContacts })

    }

    deleteContact = contactID => {
        this.setState({
            sliceContacts: this.state.sliceContacts.filter(elm => elm.id != contactID)
        })
    }


    render() {

        return (
            <>
                <div className="btn-div">

                    <button className="btn" onClick={this.getRandomContact}>Add Random Contact</button>
                    <button className="btn" onClick={this.sortByName}>Sort by name</button>
                    <button className="btn" onClick={this.sortByPop}>Sort by popularity</button>

                </div>


                <table className="contacts-table">
                    <tr className="titleTab">
                        <th><h3>Picture</h3></th>
                        <th><h3>Name</h3></th>
                        <th><h3>Popularity</h3></th>
                        <th><h3>Action</h3></th>
                    </tr>


                    {this.state.sliceContacts.map(elm =>
                        <>
                            <tr className="contacts">
                                <th> <img src={elm.pictureUrl} alt={elm.name} /> </th>
                                <th> {elm.name} </th>
                                <th> {elm.popularity.toFixed(2)}</th>
                                <th>
                                    <button className="deleteBtn" onClick={() => this.deleteContact(elm.id)}>Delete</button>
                                </th>
                            </tr>

                        </>
                    )}

                </table>
            </>
        )

    }
}

export default ContactList