import React, { Component } from 'react'
import contacts from '../contacts';
const five = [];
for (let i = 0; i < contacts.length && i < 5; i++) {
    five.push(contacts[i]);
}

export class Tables extends Component {
    state = {
        contacts: five,
    };
    addContact = () => {
        const newContactList = [...this.state.contacts];
        newContactList.push(contacts[Math.floor(Math.random() * (contacts.length - 6 + 1)) + 6]);
        this.setState({ contacts: newContactList });
    };

    handleDelete = (index) => {
        this.setState({
            contacts: this.state.contacts.filter((contact, i) => i !== index),
        })
    }
    sortByName = () => {

        this.setState(
          {
            contacts: [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name)),
          },
        );
      };
    
      sortByPopularity = () => {
        this.setState(
          {
            contacts: [...this.state.contacts].sort((a, b) => {
              return b.popularity - a.popularity;
            }),
          },
        );
      };
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Ironhack</th>
                        </tr>
                        <button onClick={this.sortByName}>Sort by Name</button>
                        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                        <tr>
                            <th>Picture</th>
                            <th>name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact, i) => (
                            <tr key={contact.id}>
                                <td> <img className="star" src={contact.pictureUrl} alt="star"></img></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)} </td>
                                <button onClick={(event) => this.handleDelete(i)}>Delete</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={this.addContact}>Add contact</button>
            </div>
        );
    }
}

export default Tables;

