import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactList from '../ContactList'
import './Contact.css'


export default class Contact extends Component {
    state = {
        contactsFive: contacts.slice(0, 5)
    }

    addRandomContact = () => {
        const copyContacts = this.state.contactsFive;
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        if(!copyContacts.includes(randomContact)){
            copyContacts.push(randomContact)
        }
        this.setState( {contactsFive: copyContacts} )
    } 



    render() {
        return (
            <div className="tableContact">
                <div className="buttons">
                    <button onClick={this.addRandomContact}> Add random contact</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                </thead>
                <tbody>
                    {this.state.contactsFive.map(item => {
                        return <ContactList key={item.id} {...item}/> 

                    })}
                </tbody>
            </table>
        </div>
            
        )
    }
}
