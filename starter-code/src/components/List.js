import React, { Component } from 'react';
import Card from './Card'
import contacts from '../contacts.json';

let filteredContacts = contacts.slice(0, 5)

class ActorsList extends Component {

    constructor() {
        super()
        this.state = {
            contacts,
            filteredContacts

        }
    }

    render() {

        return (
            <>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.filteredContacts.map((elm, idx) => <Card key={idx} {...elm} />)}
                </table>
            </>
        )
    }
}

export default ActorsList