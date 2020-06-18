import React, { Component } from 'react';
import './ContactSelection.css';
import contacts from '../data/contacts';
import Contact from './Contact';

export default class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    addRandom = () => {
        let randomize = Math.floor(Math.random() * this.state.contacts.length);
        let randomContact = this.state.contacts[randomize];
        let newSelection = [...this.state.contacts];
        newSelection.push(randomContact);
    
        this.setState({
          contacts: newSelection
        });
    }

    sortName = () => {
        let sortedByName = [...this.state.contacts].sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (b.name > a.name) {
                return -1;
            }
            return 0;
        });
        
        this.setState({
          newSelection: sortedByName
        });
    }

    sortPopularity = () => {
        let sortedByPopularity = [...this.state.contacts].sort(function (a, b) {
            if (a.popularity > b.popularity) {
                return 1;
            }
            if (b.popularity > a.popularity) {
                return -1;
            }
            return 0;
        });
        
        this.setState({
          newSelection: sortedByPopularity
        });
    }

    
    
    render() {
        return (
            <div className="selection">
                <button onClick={this.addRandom}>Add random contact</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPopularity}>Sort by popularity</button>
                <table>
                    <th>
                        <tr>
                            <td><h1>Photo</h1></td>
                            <td><h1>Name</h1></td>
                            <td><h1>Popularity</h1></td>
                        </tr>
                    </th>
                    <tbody>
                        {
                            this.state.contacts.map((contact, index) => (
                                <Contact
                                    key={`${index}-${contact.name}`}
                                    pictureUrl={contact.pictureUrl}
                                    name={contact.name}
                                    popularity={contact.popularity}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

