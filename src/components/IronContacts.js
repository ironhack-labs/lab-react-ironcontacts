import React, { Component } from 'react'
import contacts from '../contacts.json'
import "./Contacts.css"

export default class IronContacts extends Component {
    constructor() {
        super()
        this.state = {
            fullContacts:contacts,
            contacts: contacts.slice(0, 5)
        }
    }

    addContact = () => {
        let myAddContact = [...this.state.contacts];
        myAddContact.push(this.state.fullContacts[Math.floor(Math.random() * (this.state.fullContacts.length))])
        this.setState({ contacts: myAddContact })
    }

    sortByName = () => {
        const sortByName = [...this.state.contacts]
        sortByName.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({contacts: sortByName})
    }

    sortByPopularity = () => {
        const sortByPopularity = [...this.state.contacts]
        sortByPopularity.sort((a, b) => b.popularity - a.popularity)
        this.setState({ contacts: sortByPopularity })
    }

    deleteContact= (index) => {
        const deleteContact = [...this.state.contacts]
        deleteContact.splice(index, 1)
        this.setState({contacts: deleteContact})
    }

    render() {

       
        console.log(IronContacts);

        return (
            <div className='container'>
                <h1>Contacts</h1>
                <div className='button'>
                    <button className="btn btn-light" onClick={this.addContact}>Add Contact</button>
                    <button className="btn btn-light" onClick={this.sortByName}>Order by name</button>
                    <button className="btn btn-light" onClick={this.sortByPopularity}>Order by popularity</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.contacts.map((contact, index) =>
                            <tr key={index}>
                                <td><img alt={contact.name} src={contact.pictureUrl}></img></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)}</td>
                                <td><button className="btn btn-outline-secondary" onClick={this.deleteContact}>Delete contact</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>

        )
    }


}

