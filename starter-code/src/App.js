import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
    state = {
        contacts: contacts.slice(0, 5)
    }

    getRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    handleAddContact = () => {
        let randomPosition = this.getRandomNumber(0, contacts.length - 1);
        let newContacts = [...this.state.contacts];

        newContacts.unshift(contacts[randomPosition]);

        this.setState({ contacts: newContacts });
    }

    handleSortBy = (field) => {
        const { contacts } = this.state;
        let sortedContacts = [...contacts];

        sortedContacts.sort((a, b) => {
            return field === 'name' ? a[field].localeCompare(b[field]) : b[field] - a[field];
        })

        this.setState({ contacts: sortedContacts });
    }

    handleDeleteContact = (id) => {
        const { contacts } = this.state;
        let newContacts = [...contacts];

        newContacts = newContacts.filter(contact => id !== contact.id);

        this.setState({ contacts: newContacts });
    }

    render() {
        const { contacts } = this.state;
        return (
            <div className="app">
                <div className="app__head">
                    <h1>IronContacts</h1>
                    <button className="app__add-btn" onClick={this.handleAddContact}>Add random contact</button>
                    <button className="app__add-btn" onClick={() => this.handleSortBy('name')}>Sort by name</button>
                    <button className="app__add-btn" onClick={() => this.handleSortBy('popularity')}>Sort by popularity</button>
                </div>
                <table className="app__table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, i) => (
                                <tr key={i}>
                                    <td>
                                        <img src={contact.pictureUrl} width="60" alt={contact.name} />
                                    </td>
                                    <td>{contact.name}</td>
                                    <td>{contact.popularity.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => this.handleDeleteContact(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            !contacts.length &&
                            <tr>
                                <td colSpan="4">You have no contacts... 😱</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
