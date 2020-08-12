import React, { Component } from 'react';
import ContactRow from '../ContactRow/ContactRow';
import './ContactList.css';

class ContactList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          contacts: props.contactsAvailables,
          restContacts: props.restContacts
        };
    }

    getRandomActor = (e) => {

        if(this.state.restContacts.length === 0){
            e.target.disabled = true;
            return;
        }

        const oldContactsArr = this.state.contacts;
        const restIndex = Math.floor(Math.random() * this.state.restContacts.length)
        const newContact = this.state.restContacts[restIndex];

        const newrestContacts = this.state.restContacts.filter(contact => contact.id !== newContact.id);
        this.setState({restContacts: newrestContacts})

        const newArr = [
            newContact,
            ...oldContactsArr
        ]
        this.setState({contacts: newArr})
    }

    sortByName = () => {
        const sortArr = this.state.contacts.sort((a, b) => a.name < b.name ? -1 : 1);
        this.setState({contacts: sortArr})
    }

    sortByPopularity = () => {
        const sortArr = this.state.contacts.sort((a, b) => a.popularity > b.popularity ? -1 : 1);
        this.setState({contacts: sortArr})
    }

    handleDelete = (id) => {
        
        const deleteContact = this.state.contacts.filter(contact => contact.id === id);
        const oldRestContacts = this.state.restContacts;
        const newOldRestContacts = [
            deleteContact,
            ...oldRestContacts
        ]
        this.setState({restContacts: newOldRestContacts})

        const noDeleteContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({contacts: noDeleteContacts})
    }

    render () {
        return (
            <section>
                <button type="button" onClick={(e) => this.getRandomActor(e)}>Add Random Contact</button>
                <button type="button" onClick={() => this.sortByName()}>Sort by name</button>
                <button type="button" onClick={() => this.sortByPopularity()}>Sort by popularity</button>
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map(contact => {
                                return <ContactRow handleDelete={() => this.handleDelete(contact.id)} key={contact.id} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity}/>
                            })
                        }
                    </tbody>
                </table>
            </section>
        )
    }
    
}

export default ContactList;