import { Component } from 'react';
import contacts from '../contacts.json';
import AddRandomContact from './AddRandomContact.js';
import ContactCard from './ContactCard.js'

const contactsArray = contacts;

let initialArray = [];
for (let i = 0; i < 5; i += 1) {
initialArray.push(contactsArray[i])
};

class Contacts extends Component {
    state = {
        contactsList: initialArray,
    }

    handleAddContact = (contact) => {
        if (!this.state.contactsList.includes(contact)) {
            const newContacts = [...this.state.contactsList, contact];
            this.setState({
                contactsList: newContacts,
        })
        }
    }

    render(){
        const showingContacts = this.state.contactsList;
        return (
        <div>
            <h1>IronContacts</h1>
            <AddRandomContact addContact={this.handleAddContact} />
            {console.log(showingContacts, contacts.length)}
            <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
                <tbody>
            {showingContacts.map((item) => (
                <ContactCard key={item.id} pictureUrl={item.pictureUrl} name={item.name} popularity={item.popularity}/>
            )
            )}
            </tbody>
            </table>
        </div>
        )
    }
}

export default Contacts;