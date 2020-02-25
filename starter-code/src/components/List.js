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
    addContacts = idx => {
        const newContacts = [...this.state.contacts]
        let randomContacts = Math.floor(Math.random() * (contacts.length + 1))
        newContacts.push(contacts[randomContacts])
        this.setState({ contacts: newContacts })
    }
    render() {

        return (
            <>
                <button onClick={this.addContacts}>Add Random Contact</button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.contacts.map((elm, idx) => <Card key={idx} {...elm} />)}
                </table>

            </>
        )
    }
}

export default ActorsList