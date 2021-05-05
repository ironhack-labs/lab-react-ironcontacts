import React, { Component } from 'react';
import contacts from "./contacts.json";

export default class Contacts extends Component {
    state = {
        selectedContacts: contacts.slice(0, 5)
    }
    randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    addContact = () => {
        const newContact = contacts[this.randomIntFromInterval(0, contacts.length - 1)];
        this.setState((state) => ({
            selectedContacts: [...state.selectedContacts, newContact]
        }))
    }
    sortByName = () => {
        const contactCopy = [...this.state.selectedContacts];
        contactCopy.sort((a, b) =>
        a.name.localeCompare(b.name)
        );
        this.setState({
            selectedContacts: contactCopy
        })
    }
    sortByPopularity = () => {
        const contactCopy = [...this.state.selectedContacts];
        contactCopy.sort((a, b) => b.popularity - a.popularity);
        this.setState({
            selectedContacts: contactCopy
        })
    }
    delete = (event) => {
        const id = event.target.parentElement.parentElement.getAttribute('id');
        const contactCopy = [...this.state.selectedContacts];
        const index = contactCopy.findIndex(el => el.id === id);
        contactCopy.splice(index, 1)
        this.setState({
            selectedContacts: contactCopy
        })
    }
    render() {
        const display = this.state.selectedContacts.map(contact => {
            return (
                <tr key={contact.id} id={contact.id}>
                    <td className="tg-0lax">
                        <img src={contact.pictureUrl}/>
                    </td>
                    <td className="tg-0lax">
                        {contact.name}
                    </td>
                    <td className="tg-0lax">
                        {contact.popularity.toFixed(2)}
                    </td>
                    <td className="tg-0lax">
                        <button className="remove-btn" onClick={this.delete}>Delete</button>
                    </td>
                </tr>
            )
        })
        return (
            <>
                <div id="multi-button">
                    <button onClick={this.addContact}>Add Random Contact</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPopularity}>Sort by popularity</button>
                </div>
                <table className="tg">
                    <thead>
                    <tr>
                        <th className="tg-0lax">Picture</th>
                        <th className="tg-0lax">Name</th>
                        <th className="tg-0lax">Popularity</th>
                        <th className="tg-0lax">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {display}
                    </tbody>
                </table>
            </>
        )
    }
}