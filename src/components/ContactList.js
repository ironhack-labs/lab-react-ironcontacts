import React from 'react';
import Contact from './Contact';
import contacts from '../contacts.json';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: contacts.slice(0, 5),
            availableContacts: contacts.slice(5),
            isMessage: false
        };
    }

    updateContactList(contacts) {
        return contacts.map(contact => {
            return (<Contact key={contact.id} {...contact} clickToDelete={() => this.deleteContactHandler(contact.id)} />);
        });
    }

    addRandomContactHandler() {
        const availableContactsCopy = [...this.state.availableContacts];
        const displayedContactsCopy = this.state.displayedContacts;
        if (availableContactsCopy.length === 0) {
            this.setState({
                isMessage: true
            });
            return;
        }
        const contactRandomIndex = Math.floor(Math.random() * availableContactsCopy.length)
        const contactRandom = availableContactsCopy[contactRandomIndex];
        availableContactsCopy.splice(contactRandomIndex, 1);
        displayedContactsCopy.push(contactRandom);
        this.setState({
            availableContacts: availableContactsCopy,
            displayedContacts: displayedContactsCopy
        });
    }

    sortHandler(type) {
        const displayedContactsCopy = this.state.displayedContacts;
        if (type==="name") displayedContactsCopy.sort((a, b) => a.name.localeCompare(b.name));
        if (type==="popularity") displayedContactsCopy.sort((a, b) => b.popularity - a.popularity);
        this.setState({
            displayedContacts: displayedContactsCopy
        });
    }

    deleteContactHandler(id) {
        const availableContactsCopy = [...this.state.availableContacts];
        const displayedContactsCopy = this.state.displayedContacts;
        const contactIndex = displayedContactsCopy.findIndex(contact => contact.id === id);
        const deletedContact = displayedContactsCopy.splice(contactIndex, 1);
        availableContactsCopy.push(deletedContact[0]);
        this.setState({
            availableContacts: availableContactsCopy,
            displayedContacts: displayedContactsCopy
        });
    }

    render() {
        return (
            <div className="contacts">
                <h1>IronContacts</h1>
                {this.state.isMessage && <p>No available contacts</p>}
                    <div className="button" style={{display: "flex"}}>
                    <button onClick={() => this.addRandomContactHandler()}>Add Random Contact</button>
                    <button onClick={() => this.sortHandler("name")}>Sort By Name</button>
                    <button onClick={() => this.sortHandler("popularity")}>Sort By Popularity</button>
                </div>
                <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
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