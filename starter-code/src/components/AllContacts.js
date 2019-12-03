import React, { Component } from 'react';
import './AllContacts.css';
import OneContact from './OneContact';
import shortid from 'shortid';


class AllContacts extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            contacts: this.props.contactsArr.splice(0, 5),
            restofcontacts: this.props.contactsArr.splice(5),
            randomContact: ''
        }

        // add a unique id to each contact obj inside the contacts array
        this.state.contacts.forEach(contact => contact.id = shortid.generate() );
    }

    // ITERATION 2 - Add New Random Contacts
    showRandomContact = () => {
        const randomIndex = Math.floor(Math.random() * this.state.restofcontacts.length);
        const randomValue = this.state.restofcontacts[randomIndex];

        // console.log(randomValue);
        this.state.contacts.push(randomValue);
        this.setState( { randomContact: randomValue });
    }

    // ITERATION 3 - Sort Contacts By Name 
    sortByName = () => {
        const sortedContactsByName = this.state.contacts.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        
        this.setState( { contacts: sortedContactsByName });
    }

    // ITERATION 3 - Sort Contacts By Popularity 
    sortByPopularity = () => {
        const sortedContactsByPopularity = this.state.contacts.sort(function(a, b) {
            var popA = a.popularity;
            var popB = b.popularity;
            return (popA < popB) ? -1 : (popA > popB) ? 1 : 0;
        });

        this.setState( { contacts: sortedContactsByPopularity });
    }

    // ITERATION 4 - Remove Contacts
    deleteContact = contactId => {
        // Copy the contacts array from the state
        const contactsCopy = [...this.state.contacts];

        // Edit the copy of the movies
        contactsCopy.splice(contactId, 1);

        // Set back the new movie array to the state (update the state with the updated movies)
        this.setState({ contacts: contactsCopy });
    }


    render() {
        return (
            <div>
                <div className="buttons">
                    <button onClick={this.showRandomContact}>Add Random Contact</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPopularity}>Sort by popularity</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th className="name">Name</th>
                        <th className="pop">Popularity</th>
                        <th>Action</th>
                    </tr> 
                    </thead>
                    <tbody>
                    { this.state.contacts.map( (contact, index) => 
                        <OneContact 
                            oneContact={contact}  
                            key={contact.id}
                            clickToDelete={ () => this.deleteContact(index) } 
                        />
                    )}
                    </tbody>
                </table> 
            </div>
        )
    }
}



export default AllContacts;