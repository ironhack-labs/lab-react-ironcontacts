import React, { Component } from 'react'

import contactsJSON from '../contacts.json';

export class IronContact extends Component {
    state = {
        contacts: contactsJSON,
        slicedContacts: contactsJSON.slice(0,5)
    };

    handleRandomActor = () => {
        const copyContacts =[...this.state.contacts.splice(5)];
        const copySlicedContacts = [...this.state.slicedContacts];

        var randomActor = copyContacts[Math.floor(Math.random() * copyContacts.length)];

        copyContacts.splice(randomActor, 1);
        copySlicedContacts.push(randomActor)

        this.setState({ slicedContacts: copySlicedContacts });
    };

    handleSortByName = () => {
        const copySlicedContacts = [...this.state.slicedContacts];
        
        copySlicedContacts.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) { return -1;}
            if (nameA > nameB) { return 1;}
            return 0;
        });

        this.setState({ slicedContacts: copySlicedContacts });
    }

    handleSortByPopularity = () => {
        const copySlicedContacts = [...this.state.slicedContacts];
        
        copySlicedContacts.sort(function (a, b) {
            return b.popularity - a.popularity});

        this.setState({ slicedContacts: copySlicedContacts });
    }

    handleRemoveActor = (id) => {
        const copySlicedContacts = [...this.state.slicedContacts];
        copySlicedContacts.splice(id, 1);
        this.setState({ slicedContacts: copySlicedContacts });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleRandomActor()}>Add Random Contact</button>
                <button onClick={() => this.handleSortByName()}>Sort by name</button>
                <button onClick={() => this.handleSortByPopularity()}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.slicedContacts.map((contact, id) => (
                            <tr key={id}>
                                <td><img src={contact.pictureUrl} alt="picture" className="picture"/></td>
                                <td><p>{contact.name}</p></td>
                                <td><p>{contact.popularity}</p></td>
                                <button onClick={() => this.handleRemoveActor(id)}>Remove</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default IronContact
