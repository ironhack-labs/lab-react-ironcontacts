import React, { Component } from 'react'
import contacts from '../contacts.json';
import TableRow from './TableRow';


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactList: [...contacts]
        }
    }
    createContacts = () => {
        return this.state.contactList
            .filter((c,i) => i < 5)
            .map(contact => <TableRow key={contact.id} {...contact} />)
    }
    render() {
        return (
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                {this.createContacts()}
            </table>
        )
    }
}

export default Table
