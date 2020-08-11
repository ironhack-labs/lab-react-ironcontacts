import React, { Component } from "react";
import contacts from '../contacts.json';

class ContactList extends Component {
    constructor() {
        super();
        this.state = {
            Contacts: contacts.slice(0, 5),
        }
    }

    addRandomContact = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

        this.setState((state) => ({
            Contacts: state.Contacts.concat(randomContact)
        }))
    };

    sortByName = () => {
        const sortedxName = this.state.Contacts
        sortedxName.sort((a, b) =>
            a.name.localeCompare(b.name))
        this.setState(() => ({
            Contacts: sortedxName
        }))
    }

    sortByPopularity = () => {
        const sortedxPopularity = this.state.Contacts
        sortedxPopularity.sort((a, b) => {return a.popularity - b. popularity})
        this.setState(() => ({
            Contacts: sortedxPopularity
        }))
    }

    deleteContact = (id) => {
        const contactDelete = this.state.Contacts
        contactDelete.splice(id, 1);
        this.setState(() => ({
            Contacts: contactDelete
        }))
    }

    render() {
        return (
        <div>
            <h1>IronContacts</h1>
            <div class="main-btns">
                <button class="btn" onClick={this.addRandomContact}>Add Random Contact</button>
                <button class="btn" onClick={this.sortByName}>Sort by name</button>
                <button class="btn" onClick={this.sortByPopularity}>Sort by popularity</button>
            </div>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                {this.state.Contacts.map((oneContact, index) => {
                    return(
                        <tr>
                            <td><img class="celeb-img" src={oneContact.pictureUrl} width="80px"/></td>
                            <td>{oneContact.name}</td>
                            <td>{oneContact.popularity.toFixed(2)}</td>
                            <td><button class="btn" onClick={() => this.deleteContact(index)}>Delete</button></td>
                        </tr>
                    )
                })}  
          </table> 
        </div>
        )
    }
}

export default ContactList;

