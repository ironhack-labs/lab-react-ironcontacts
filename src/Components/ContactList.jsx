import { render } from "@testing-library/react";
import React, { Component } from "react";
import contacts from '../contacts.json';

class ContactList extends Component {
    state = {
        contacts: contacts.slice(0, 5)
    }

    handleAdd = () => {
        if (this.state.contacts.length < contacts.length) {
            let contact = contacts[Math.floor(Math.random() * contacts.length)];
            while (this.state.contacts.indexOf(contact.name) != -1) {
                contact = contacts[Math.floor(Math.random() * contacts.length)];
            }
            this.state.contacts.push(contact);
            this.setState(
                {
                    contacts: [...this.state.contacts]
                }
            );
        }
    }

    handleSortByName = () => {
        const copy = [...this.state.contacts];

        copy.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

        this.setState({
            contacts: copy,
        });
    };

    handleSortByPopularity = () => {
        const copy = [...this.state.contacts];

        copy.sort((a, b) => {
            return a.popularity-b.popularity;
        });

        this.setState({
            contacts: copy,
        });
    };

    handleRemove = (contact) => {
    
        const newArray = this.state.contacts.filter((p) => p.name !== contact.name);
    
        
        this.setState({
          contacts: newArray,
        });
      };

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleAdd}>Add Contact!</button>
                    <button onClick={this.handleSortByName}>Sort By Name!</button>
                    <button onClick={this.handleSortByPopularity}>Sort By Popularity!</button>
                </div>
                <table className="ContactTable">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {
                        this.state.contacts.map((contact) => {
                            return <tr>
                                <td key={contact.picture}><img src={contact.pictureUrl} alt="" className="ContactImg" /></td>
                                <td key={contact.name}>{contact.name}</td>
                                <td key={contact.popularity}>{contact.popularity.toFixed(2)}</td>
                                <td><button
                    onClick={() => {
                      this.handleRemove(contact);
                    }}
                  >
                    Delete!
                  </button></td>
                            </tr>
                        })
                    }
                </table>

            </div>
        );
    }
}


export default ContactList;