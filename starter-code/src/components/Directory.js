import React, { Component } from 'react';
import Contact from './Contact';
import contacts from '../contacts.json';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    addContact() {
        this.changeContacts([...this.state.contacts, contacts[this.getRandom()]]);
    }

    getRandom() {
        return Math.floor(Math.random() * contacts.length);
    }

    changeContacts(contacts) {
        this.setState({contacts}); 
    }

    getSort(sorter, ) {
        this.changeContacts(
            this.state.contacts.sort((a, b) => {
                if (a[sorter] < b[sorter])
                    return -1
                if (a[sorter] > b[sorter])
                    return 1
                return 0
            })
        );
    }
    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={() => { this.addContact() }}>Add Random Contact</button>
                <button onClick={() => { this.getSort('name') }}>Sort by name</button>
                <button onClick={() => { this.getSort('popularity') }}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(contact => {
                            return <Contact contact={contact} key={contact.id}></Contact>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Directory;