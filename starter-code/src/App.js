import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';


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
        const { contacts, sortByName, sortByPopularity } = this.state;
        let sortedContacts = {
            contacts: [...contacts],
            sortByName: field === 'name' && sortByName === 'DESC' || sortByName === '' ? 'ASC' : 'DESC',
            sortByPopularity: field === 'popularity' && sortByPopularity === 'DESC' || sortByPopularity === '' ? 'ASC' : 'DESC'
        };

        sortedContacts.contacts.sort((a, b) => {
            if (field === 'name') {
                return sortedContacts.sortByName === 'DESC' ?
                    a[field].localeCompare(b[field]) :
                    b[field].localeCompare(a[field]);
            }
            return sortedContacts.sortByPopularity === 'DESC' ?
                b[field] - a[field] :
                a[field] - b[field];
        })

        this.setState(sortedContacts);
    }

    handleDeleteContact = (id) => {
        const { contacts } = this.state;
        let newContacts = [...contacts];

        newContacts = newContacts.filter(contact => id !== contact.id);

        this.setState({ contacts: newContacts });
    }

    render() {
        const { contacts, sortByName, sortByPopularity } = this.state;
        return (
            <div className="app">
                <header className="app__header">
                    <h1>IronContacts</h1>
                    <button className="btn app__add-btn clickable" onClick={() => this.handleAddContact()}>Add random contact</button>
                </header>
                <table className="app__table" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>
                                <span className="clickable" onClick={() => this.handleSortBy('name')}>Name
                                    <span>{sortByName === 'DESC' ? <span> &#8615;</span> : <span> &#8613;</span>}</span>
                                </span>
                            </th>
                            <th>
                                <span className="clickable" onClick={() => this.handleSortBy('popularity')}>Popularity
                                    <span>{sortByPopularity === 'DESC' ? <span> &#8615;</span> : <span> &#8613;</span>}</span>
                                </span>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, i) => (
                                <tr key={i}>
                                    <td>
                                        <img src={contact.pictureUrl} width="50" alt={contact.name} />
                                    </td>
                                    <td>{contact.name}</td>
                                    <td>{contact.popularity.toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="btn app__remove-btn clickable"
                                            onClick={() => this.handleDeleteContact(contact.id)}>
                                            Delete
                                        </button>
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
