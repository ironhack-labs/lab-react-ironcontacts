import React, { Component } from 'react';
import ContactRow from './ContactRow';
import shortid from 'shortid';

class ContactsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: this.props.contactsArr.slice(0,5),
        }
    }

    render() { 
        return (
            <table>
                <thead>
                    <tr>
                        <th>Contacts</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.contacts.map(contactObj => {
                            return (
                                <ContactRow key={shortid.generate()} contact={contactObj} />           
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default ContactsTable;