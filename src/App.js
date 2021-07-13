import './App.css';
import React, { Component } from 'react';
import contactsJson from './contacts.json';

class Contacts extends Component {

    state = {
        contacts: contactsJson.slice(0, 5)
    };

    handleRandomContact = () => {
        const { contacts } = this.state;
        
        let randomIndex = Math.floor(Math.random() * contactsJson.length);
        let randomContact = contactsJson[randomIndex];

        this.setState({
            contacts: [randomContact, ...contacts]
        })
    };

    handleSortByName = () => {
        const { contacts } = this.state;
        let clonedContacts = JSON.parse(JSON.stringify(contacts));

        clonedContacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    };

    handleSortByPopularity = () => {
        const { contacts } = this.state;
        let clonedContacts = JSON.parse(JSON.stringify(contacts));

        clonedContacts.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            } else if (a.popularity < b.popularity) {
                return 1;
            } else {
                return 0;
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    };

    handleDelete = (index) => {
        const { contacts } = this.state;

        let filteredContacts = contacts.filter((contact, i) => {
            return i !== index;
        })

        this.setState({
            contacts: filteredContacts
        })
    };

    render() {
        return (
            <div>
                <h1 className="display-1 fw-bold">IronContacts</h1>
                <button className="btn btn-success m-2"onClick={this.handleRandomContact}>Add Random Contact</button>
                <button className="btn btn-info m-2"onClick={this.handleSortByName}>Sort by Name</button>
                <button className="btn btn-warning m-2"onClick={this.handleSortByPopularity}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th className='fs-4 text-decoration-underline'>Picture</th>
                            <th className='fs-4 text-decoration-underline'>Name</th>
                            <th className='fs-4 text-decoration-underline'>Popularity</th>
                            <th className='fs-4 text-decoration-underline'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map((contact, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={contact.pictureUrl}/>
                                        </td>
                                        <td className='text-nowrap'>{contact.name}</td>
                                        <td>{contact.popularity.toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => { this.handleDelete(index) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <Contacts/>
        </div>
    );
}

export default App;
