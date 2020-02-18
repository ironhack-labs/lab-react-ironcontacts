import React, { Component } from 'react'
// import contacts from '../contacts.json';

export default class DisplayContacts extends Component {

    state = {
        contacts: this.props.contacts,
        fiveFirstContacts: this.props.contacts.splice(0,5)
    };
   
    render() {
        return (
            <div className="displayContacts">
            <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
            {this.state.fiveFirstContacts.map((contact,i) => (
                        <tr key={i}>
                            <td><img src={contact.pictureUrl} alt=""/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                        </tr>
            ))}
                    </tbody>
                    </table>
            </div>
        )
    }
}

