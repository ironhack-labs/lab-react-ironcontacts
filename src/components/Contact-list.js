import React, { Component } from 'react';
import './Contact-list.css';
import contacts from '../contacts.json';
import ContactCard from './Contact-card';


class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5),
            sizeOfArrayContacts: 5
        }
    }


    addRandomContact = () => {
        let newContact = [...this.state.contacts]
        const random = contacts[Math.round(Math.random() * contacts.length)]
        if (!newContact.includes(random)) newContact.push(random)
        this.setState({
            contacts: newContact,
            sizeOfArrayContacts: ++this.state.sizeOfArrayContacts
        })
    }


    sortByName = () => {

        let orderedContactList = [...this.state.contacts]
        orderedContactList = orderedContactList.sort(function (o1, o2) {
            if (o1.name > o2.name) {
                return 1;
            } else if (o1.name < o2.name) {
                return -1;
            }
            return 0;
        })
        console.log(orderedContactList)
        this.setState({
            contacts: orderedContactList,

        })
    }


    sortByPopularity = () => {
        let orderedContactList = [...this.state.contacts]
        orderedContactList = orderedContactList.sort(function (o1, o2) {
            if (o1.popularity < o2.popularity) {
                return 1;
            } else if (o1.popularity > o2.popularity) {
                return -1;
            }
            return 0;
        })
        console.log(orderedContactList)
        this.setState({
            contacts: orderedContactList,

        })
    }


    deleteContact = contactID => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id != contactID)
        })
    }


    render() {
        return (
            <><h1>IronContacts</h1>
                <div className="buttons">
                    <button className="btn add-button" onClick={this.addRandomContact}>Add Random Contact</button>
                    <button className="btn sort-name-button" onClick={this.sortByName}>Sort by name</button>
                    <button className="btn sort-popularity-button" onClick={this.sortByPopularity}>Sort by popularity</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(elm => <ContactCard key={elm.id} {...elm} deleteContact={() => this.deleteContact(elm.id)} />).slice(0, this.state.sizeOfArrayContacts)}
                    </tbody>
                </table>
            </>
        )
    }

}


export default ContactList