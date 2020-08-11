import React, { Component } from "react";
import contacts from '../../contacts.json';
import ContactCard from './ContactCard';

class ContactList extends Component {
    state = {
        contacts: contacts.slice(0, 4),
    }

    addPeopleHandler = (id) => {
        // const contactsCopy = [...this.state.contacts];
        const randomIndex = Math.floor(Math.random() * contacts.length);
        const newContact = contacts[randomIndex];
        const updatedContacts = [...this.state.contacts, newContact];
        this.setState({
            contacts: updatedContacts
        })
    }

    sortByName = () => {
        const sortedContacts = [...this.state.contacts]
        sortedContacts.sort((a, b) => {
           return a.name.localeCompare(b.name);
        })
        this.setState({
            contacts: sortedContacts
        })
    }

    sortByPopularity = () => {
        const sortedPopularity = [...this.state.contacts]
        sortedPopularity.sort((a, b) => a.popularity < b.popularity ? 1 : (b.popularity <a.popularity) ? -1 : 0)
        this.setState({
            contacts: sortedPopularity
        })
    }

    deleteContact = (index) => {
        const contactsCopy = [...this.state.contacts];
        contactsCopy.splice(index, 1)
        this.setState({
            contacts: contactsCopy,
        });
    };

    render(){
        return(
            
            <div>
                <button onClick={this.addPeopleHandler}>Add new contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>

                {this.state.contacts.map((contact, index) =>{ return (<ContactCard key={contact.id} index={index} contact={contact} delete={this.deleteContact}/>)})}
            </div>

        )
    }
}

export default ContactList