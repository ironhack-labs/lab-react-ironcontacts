import React, { Component } from 'react';
import Card from './Card'
import contacts from '../contacts.json';

class ActorsList extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    //iteration2
    addContacts = idx => {
        const newContacts = [...this.state.contacts]
        let randomContacts = Math.floor(Math.random() * (contacts.length + 1))
        newContacts.push(contacts[randomContacts])
        this.setState({ contacts: newContacts })
    }

    //iteration 3
    sortByName = () => {
        const contactCopy = [...this.state.contacts]
        contactCopy.sort((a, b) =>a.name < b.name ? -1 : 1)

        this.setState({
            contacts: contactCopy
        })
    }

    sortByPopularity = () => {
        const contactCopy = [...this.state.contacts]
        contactCopy.sort((a, b) => a.popularity < b.popularity ? 1 : -1)

        this.setState({
            contacts: contactCopy
        })
    }

    //iteration 4
    deleteContact = idx => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.splice(idx, 1)
        this.setState({ contacts: contactsCopy })
    }

    render() {

        return (
            <>
                <button onClick={this.addContacts}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.contacts.map((elm, idx) => <Card key={idx} {...elm} deleteContact={() => this.deleteContact(idx)} />)}
                </table>

            </>
        )
    }
}

export default ActorsList