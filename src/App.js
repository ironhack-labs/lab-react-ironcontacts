import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './contactslist/ContactsList';

class App extends React.Component {
    state = {
        contacts: contacts.slice(0, 5),
    };

    addRandomContact() {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        this.setState({contacts: [...this.state.contacts, randomContact]});
    }

    deleteContact(id) {
        this.setState({
            contacts: this.state.contacts.filter((contact) => {
            return contact.id !== id;
            }),
        });
    }

    render() {
        return (
            <div className="App">
                <h1>IronContacts</h1>
                <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
                <ContactsList contactsArray={this.state.contacts} deleteContact={this.deleteContact.bind(this)}/>



            </div>
        );
    }
}

export default App;
