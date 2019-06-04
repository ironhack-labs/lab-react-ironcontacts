import React, { Component } from 'react';
import contacts from '../contacts.json';
import ContactCard from './ContactCard'

class ContactList extends Component {

    constructor() {

        super()
        
        console.log(contacts)
        this.state = {
            contacts: [ contacts[0], contacts[1], contacts[2], contacts[3], contacts[4] ],
        }
    }


    addContact = () => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.push(contacts[Math.floor(Math.random() * contacts.length)])
        this.setState({
            contacts: contactsCopy
        })
    }


    render() {
        return (
            <div>
            <button onClick={() => this.addContact()}>Add new contact</button>
            {this.state.contacts.map((contact, idx)=> <ContactCard key={idx} {...contact}/>)}
            </div>
        )
    }

}

export default ContactList