import './Contacts.css';
import { Component } from 'react';
import contacts from '../contacts.json';
import AddRandomContact from './AddRandomContact.js';
import ContactCard from './ContactCard.js';
import SortButton from './SortButton';

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

    handleSortByName = () => {
        const newContacts = [...this.state.contactsList];
        const sortedContacts = newContacts.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
          });
        this.setState({
            contactsList: sortedContacts,
        })
    }

    handleSortByPopularity = () => {
        const newContacts = [...this.state.contactsList];
        const sortedContacts = newContacts.sort(function(a, b) {
            return b.popularity - a.popularity;
        });
        this.setState({
            contactsList: sortedContacts,
        })
    }

    handleDeleteContact = (id) => {
        const newContacts = [...this.state.contactsList];
        const index = newContacts.findIndex((contact) => contact.id === id);
        newContacts.splice(index, 1);
        this.setState({
            contactsList: newContacts,
        });
    }

    render(){
        return (
        <div>
            <h1>IronContacts</h1>
            <div className='buttons-div'>
                <AddRandomContact addContact={this.handleAddContact} />
                <SortButton handleSort={this.handleSortByName} name='Sort by name'/>
                <SortButton handleSort={this.handleSortByPopularity} name='Sort by popularity'/>
            </div>
            <table className='table'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody className='cards'>
            {this.state.contactsList.map((item) => (
                <ContactCard key={item.id} pictureUrl={item.pictureUrl} name={item.name} popularity={item.popularity} deleteContact={() => {this.handleDeleteContact(item.id)}}/>
            )
            )}
            </tbody>
            </table>
        </div>
        )
    }
}

export default Contacts;