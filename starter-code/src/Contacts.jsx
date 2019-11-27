import React, { Component } from 'react'
import contacts from "./data/contacts.json";
// import Contact from "./Contact"
import './Contact.css';

export default class Contacts extends Component {

    state = {
        contacts: contacts.slice(0, 5)
    };

    addContact = () => {
        const newContact = contacts[Math.floor(Math.random() * (contacts.length - 5) + 5)];
        const copy = [...this.state.contacts];
        copy.push(newContact);
        this.setState({contacts: copy})
    }

    sortName = () => {
        const copy = [...this.state.contacts];
        this.setState({ contacts: copy.sort((a, b) => a.name.localeCompare(b.name))})
    }

    sortPopularity = () => {
        const copy = [...this.state.contacts];
        this.setState({ contacts: copy.sort((a, b) => a.popularity - b.popularity)})
    }

    removeContact = (i) => {
        const copy = [...this.state.contacts];
        copy.splice(i, 1);
        this.setState({ contacts: copy})
    }

    render() {
        return (
            <div id="contacts-table-wrapper">
                <h1>IronContacts</h1>
                <div>
                    <button onClick={this.addContact}>add contact</button>
                    <button onClick={this.sortName}>sort by name</button>
                    <button onClick={this.sortPopularity}>sort by popularity</button>
                </div>
                <table className="contacts">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.contacts.map((c, i) => (
                            <tr key={i} className="contact-row">
                                <td><img className="actor-picture" src={`${c.pictureUrl}`} alt="actor"></img></td>
                                <td>{c.name}</td>
                                <td>{c.popularity}</td>
                                <td><button onClick={() => this.removeContact(i)}>Delete</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}