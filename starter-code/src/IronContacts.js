import React, { Component } from 'react';

import contacts from './contacts.json';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class IronContacts extends Component {
    state = {

        contactsArray: contacts.filter((contacts, i) => i <= 4)
    }
    handleAdd = () => {
        const random = randomInteger(0, contacts.length);
        const copy = [...this.state.contactsArray];
        copy.unshift(contacts[random]);
        this.setState({ contactsArray: copy })
    }

    handleSortName = () => {
        const copy = [...this.state.contactsArray];
        copy.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({ contactsArray: copy })
    }

    handleSortPopularity = () => {
        const copy = [...this.state.contactsArray];
        copy.sort((a, b) => b.popularity - a.popularity);
        this.setState({ contactsArray: copy })
    }

    handleDelete = index => {
        const copy = [...this.state.contactsArray];
        copy.splice(index, 1);
        this.setState({ contactsArray: copy });
    }

    render() {
        return (
            <React.Fragment>
                <button className="add" onClick={this.handleAdd}>Add Random Contact</button>
                <button onClick={this.handleSortName}>Sort by name</button>
                <button onClick={this.handleSortPopularity}>Sort by popularity</button>
        
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactsArray.map((contact, i,) => (
                            <tr key={i}>
                                <td><img width="200" src={contact.pictureUrl} alt="" /></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)}</td>
                                <td><button className="delete" onClick={()=> this.handleDelete(i)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}