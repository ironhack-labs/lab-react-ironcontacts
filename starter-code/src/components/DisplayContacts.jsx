import React, { Component } from 'react'
// import contacts from '../contacts.json';

export default class DisplayContacts extends Component {

    state = {
        contacts: this.props.contacts,
        displayedContacts: this.props.contacts.splice(0,5),
    };

    addContact = () => {
        var newContact = this.state.contacts[Math.floor(Math.random() * (this.props.contacts.length-5))+5]
        const copy = [...this.state.displayedContacts];
        copy.push(newContact);
        this.setState({displayedContacts:copy});
    }
   
    render() {
        return (
            <div className="displayContacts">
            <button onClick={this.addContact}>Add Random Contact</button>
            <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
            {this.state.displayedContacts.map((contact,i) => (
                        <tr key={i}>
                            <td><img src={contact.pictureUrl} alt=""/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                        </tr>
            ))}
                    </tbody>
                    </table>
            </div>
        )
    }
}

