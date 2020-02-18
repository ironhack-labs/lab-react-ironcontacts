import React, { Component } from 'react'
import contacts from './contacts.json';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class IronContacts extends Component {
    state = {
        contactsArray: contacts.filter((u, i) => i <= 4)
    }

    handleAdd = () => {
        const random = randomInteger(0, contacts.length)
        // console.log(contacts[random]);
        const copy = [...this.state.contactsArray];
        copy.unshift(contacts[random]);
        this.setState({ contactsArray: copy })
    }

    handleSortAlpha = () => {
        const copy = [...this.state.contactsArray];
        copy.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({ contactsArray: copy })
    }

    handleSortPopu = () => {
        const copy = [...this.state.contactsArray];
        copy.sort((a, b) => b.popularity - a.popularity);
        this.setState({ contactsArray: copy })
    }

    // handleDelete = index => {
    //     const copy = [...this.state.contactsArray];
    //     copy.splice(index, 1);
    //     this.setState({ contactsArray: copy });
    // }
    handleDelete = index => {
        this.setState({ contactsArray: this.state.contactsArray.filter((u, i) => i !== index) })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>Add Random Contact</button>
                <button onClick={this.handleSortAlpha}>Sort by name</button>
                <button onClick={this.handleSortPopu}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="contacts">
                        {this.state.contactsArray.map((contact, i) => (
                            <tr key={i}>
                                <td><img src={contact.pictureUrl} alt="" /></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)}</td>
                                <td><button onClick={()=> this.handleDelete(i)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}