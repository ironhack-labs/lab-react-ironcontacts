import React, { Component } from 'react';
import './ContactSelection.css';
import contacts from '../data/contacts';
import Contact from './Contact';

export default class Contacts extends Component {

    state = {
        contacts: contacts.slice(0, 5)
    }

    addRandom = () => {
        let randomize = Math.floor(Math.random() * this.state.contacts.length);
        let randomContact = this.state.contacts[randomize];
        let newSelection = [...this.state.contacts];
        newSelection.push(randomContact);
    
        this.setState({
          contacts: newSelection,
        });
    }
    
    render() {
        return (
            <div className="selection">
                <button onClick={this.addRandom}>Add random contact</button>
                <table>
                    <th>
                        <tr>
                        <td><h1>Photo</h1></td>
                        <td><h1>Name</h1></td>
                        <td><h1>Popularity</h1></td>
                        </tr>
                    </th>
                    <tbody>
                        {this.state.contacts.map((contact, index) => (
                            <Contact
                                key={`${index}-${contact.name}`}
                                name={contact.name}
                                pictureUrl={contact.pictureUrl}
                                popularity={contact.popularity}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

