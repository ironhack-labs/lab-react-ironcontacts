import React from 'react';
import './ContactsList.css';

class ContactsList extends React.Component {



    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.contactsArray.map((contact) => {
                    return (
                        <tr key={contact.id}>
                            <td><img src={contact.pictureUrl} alt="img"/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                            <td>
                                <button onClick={() => this.props.deleteContact(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        );
    }
}

export default ContactsList;
