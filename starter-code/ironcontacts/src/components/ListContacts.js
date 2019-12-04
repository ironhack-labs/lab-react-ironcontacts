import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactCard from '../components/ContactCard'
class ListContacts extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts,
            filteredContacts:contacts.slice(0,5)
        }
    }
    addNewContact = () => {
        let random = Math.floor(Math.random() * (contacts.length));
        const copyFilteredContacts = [...this.state.filteredContacts];
        copyFilteredContacts.push(contacts[random]);
        this.setState({
            contacts: contacts,
            filteredContacts: copyFilteredContacts
        });
    }
    orderByName = () => {
        const copyFilteredContacts = [...this.state.filteredContacts];
        copyFilteredContacts.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0
        })
        this.setState({
            contacts: contacts,
            filteredContacts: copyFilteredContacts
        });
    }
    orderByPopularity = () => {
        const copyFilteredContacts = [...this.state.filteredContacts];
        copyFilteredContacts.sort(function (a, b) {
            if (a.popularity < b.popularity) {
                return 1;
            }
            if (a.popularity > b.popularity) {
                return -1;
            }
            return 0
        })
        this.setState({
            contacts: contacts,
            filteredContacts: copyFilteredContacts
        });
    }
    deleteContact = id => {
        const contactCopy = [...this.state.filteredContacts]
        contactCopy.splice(id, 1)
        this.setState({
            contacts: contacts,
            filteredContacts: contactCopy
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.addNewContact}>Add random Contact</button>
                <button onClick={this.orderByName}>Sort by name</button>
                <button onClick={this.orderByPopularity}>Sort by popularity</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>name</th>
                            <th>popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredContacts.map((contact, index) => (
                            <ContactCard key={index} {...contact} deleteContact={() => this.deleteContact(index)} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListContacts
    