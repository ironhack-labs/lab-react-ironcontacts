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

    showRandomContact = () => {
        const randomIndex = Math.floor(Math.random() * this.state.restofcontacts.length);
        const randomValue = this.state.restofcontacts[randomIndex];

        // console.log(randomValue);
        this.state.contacts.push(randomValue);
        this.setState( { randomContact: randomValue });
    }

    sortByName = () => {
        const sortedContactsByName = this.state.contacts.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        
        this.setState( { contacts: sortedContactsByName });
    }

    sortByPopularity = () => {
        const sortedContactsByPopularity = this.state.contacts.sort(function(a, b) {
            var popA = a.popularity;
            var popB = b.popularity;
            return (popA < popB) ? -1 : (popA > popB) ? 1 : 0;
        });

        this.setState( { contacts: sortedContactsByPopularity });
    }

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
                <button onClick={this.showRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
                    { this.state.contacts.map( contact => 
                        <OneContact 
                            oneContact={contact}  
                            key={contact.id}
                            clickToDelete={ () => this.deleteContact(contact.id) } 
                        />
                    )}
                    </tbody>
                </table> 
            </div>
        )
    }
}



export default AllContacts;