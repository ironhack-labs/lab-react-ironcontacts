import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './contactslist/ContactsList';

class App extends React.Component {
    state = {
        contacts: contacts.slice(0, 5),
    }

    addRandomContact() {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        this.state.contacts.push(randomContact);
    }

    render() {
        return (
            <div className="App">
                <h1>IronContacts</h1>
                <button onClick={() => this.addRandomContact()}>Add Random Contact</button>

                <ContactsList contactsArray={this.state.contacts}/>


            </div>
        );
    }
}

export default App;
