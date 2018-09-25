import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';
import './ContactList.css';

class ContactList extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
      contacts: []
    };

    render() {

        let { contacts, delContact } = this.props;
        contacts = contacts.length ? (
            contacts.map( c => (
                <Contact key={c.name} {...c} delCon={ delContact }/>
            ))
        ) : (
            <h2>No movies to show you!</h2>
        );


        return (
            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                { contacts }
                </tbody>
            </table>
        );
    }
}

export default ContactList;