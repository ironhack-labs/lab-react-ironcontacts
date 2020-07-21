import React, { Component } from 'react';
import contacts from '../contacts.json';

const fiveContactArr = [];
for (let i = 0; i < 5; i++) {
    fiveContactArr.push(contacts[i]);
}

export class IronContact extends Component {

    state = {
        contacts: fiveContactArr,
    }

    addContact = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        const newContactList = [...this.state.contacts];
        newContactList.push(randomContact)
        this.setState({ contacts: newContactList });
    }

    sortByName = () => {
        const sortNames = [...this.state.contacts];
        sortNames.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
        });
        this.setState({ contacts: sortNames });
    }

    sortByPop = (a, b) => {
        const sortPop = [...this.state.contacts];
        sortPop.sort((a, b) => {
            return b.popularity - a.popularity
        });
        this.setState({ contacts: sortPop });
    }

    handleDelete = (index) =>{
        this.setState({
            contacts: this.state.contacts.filter((contact, i) => i !== index),
          });
    }

    render() {

        return (
            <React.Fragment>
                <h1>IronContacts</h1>
                <button onClick={this.addContact}>Add a contact</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByPop}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact,i) => (
                            <tr key={contact.id}>
                                <td>
                                    <img
                                        style={{ width: '70px' }}
                                        src={contact.pictureUrl}
                                        alt="Celeb-Pic"
                                    />
                                </td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity}</td>
                                <button onClick={(event)=>this.handleDelete(i)}>Delete</button>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </React.Fragment>

        )

    }
}

export default IronContact