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

        let { contacts } = this.props;
        contacts = contacts.length ? (
            contacts.map( c => (
                <Contact key={c.name} {...c} />
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