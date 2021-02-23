import React from 'react';
import Contact from './Contact';
import AddRandomContact from './AddRandomContact';
import contacts from '../contacts.json';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: contacts.slice(0, 5),
            availableContacts: contacts.slice(5, 8),
            isMessage: false
        };
    }

    updateContactList(contacts) {
        return contacts.map(contact => {
            return (<Contact key={contact.id} {...contact} />);
        });
    }

    addRandomContactHandler() {
        const availableContactsCopy = [...this.state.availableContacts];
        const updatedDisplayedContacts = this.state.displayedContacts;
        if (availableContactsCopy.length === 0) {
            this.setState({
                isMessage: true
            });
            return;
        }
        const contactRandomIndex = Math.floor(Math.random() * availableContactsCopy.length)
        const contactRandom = availableContactsCopy[contactRandomIndex];
        availableContactsCopy.splice(contactRandomIndex, 1);
        updatedDisplayedContacts.push(contactRandom);
        this.setState({
            availableContacts: availableContactsCopy,
            displayedContacts: updatedDisplayedContacts
        });
    }

    message() {
        return (
            <p>No available contacts</p>
        )
    }

    render() {
        return (
            <div className="contacts">
                <h1>IronContacts</h1>
                {this.state.isMessage && <p>No available contacts</p>}
                <button onClick={() => this.addRandomContactHandler()}>Add Random Contact</button>
                {/* <AddRandomContact addNewContact={() => this.addRandomContactHandler()} /> */}
                <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.updateContactList(this.state.displayedContacts)}
                </tbody>
                </table>
            </div>
        )
    }
}


export default ContactList;