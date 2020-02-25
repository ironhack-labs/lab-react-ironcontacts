import React, { Component } from 'react';
import Card from './Card'
import contacts from '../contacts.json';

class ActorsList extends Component {

    constructor() {
        super()
        this.state = {
            contacts
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
                    {this.state.contacts.slice(0, 5).map((elm, idx) => <Card key={idx} {...elm} />)}
                </table>
            </>
        )
    }
}

export default ActorsList