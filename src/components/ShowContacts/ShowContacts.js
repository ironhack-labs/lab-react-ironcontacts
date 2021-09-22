import React, { Component } from "react";
import contacts from '../../contacts.json'

class ShowContacts extends Component {

    state = {
        contacts: contacts.slice(0, 5),
    }


    showAll = () => {
        return (
            contacts.map((contact) => {
                return (
                    <p>{contact.name}</p>
                )
            })
        )
    }


    addRandomContact = () => {
        const contactRandomIndex = Math.floor(Math.random() * contacts.length)
        this.pushContact(contactRandomIndex)
    }


    pushContact = (index) => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.push(contacts[index])

        this.setState({
            contacts: contactsCopy
        })
    }


    printContacts = () => {
        return this.state.contacts.map(({ name, pictureUrl, popularity, id }, idx) => {
            return (

                <tr key={`${idx}-${name}`}>
                    <td>
                        <img height='100px' src={pictureUrl} alt="contact pic" />
                    </td>
                    <td>
                        <h4>{name}</h4>
                    </td>
                    <td>
                        <p>{popularity.toFixed(2)}</p>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-block" onClick={() => this.removeContact(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    removeContact = (id) => {
        const contactsCopy = [...this.state.contacts]

        this.setState({
            contacts: contactsCopy.filter(contact => contact.id !== id)
        })
    }

    sortByName = () => {
        const contactsCopy = [...this.state.contacts]

        this.setState({
            contacts: contactsCopy.sort((contact1, contact2) => {
                return contact1.name.localeCompare(contact2.name)
            })
        })
    }

    sortByPopularity = () => {
        const contactsCopy = [...this.state.contacts]

        this.setState({
            contacts: contactsCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-4">
                        <button className="btn btn-dark btn-block" onClick={this.addRandomContact}>Add random contact</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-dark btn-block" onClick={this.sortByName}>Sort by name</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-dark btn-block" onClick={this.sortByPopularity}>Sort by popularity</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <table className="flex-container">
                            <thead>
                                <tr>
                                    <th>
                                        <h3>Picture</h3>
                                    </th>
                                    <th>
                                        <h3>Name</h3>
                                    </th>
                                    <th>
                                        <h3>Popularity</h3>
                                    </th>
                                    <th>
                                        <h3>Action</h3>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="mb-5">
                                {this.printContacts()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowContacts