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

    render() {
        const { contacts } = this.state;
        return (
            <div className="app">
                <div className="app__head">
                    <h1>IronContacts</h1>
                    <button className="app__add-btn" onClick={this.handleAddContact}>Add random contact</button>
                </div>
                <table className="app__table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
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
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
