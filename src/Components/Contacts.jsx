import React, { Component } from "react";
import contactsJSON from "./../contacts.json";

class Contacts extends Component {
    state = {
        contacts: contactsJSON,
        contactsFive: contactsJSON.slice(0, 5),
    };

    handleAddContact = () => {
        const n = Math.floor(Math.random() * (this.state.contacts.length - 0) + 0);
        const newContact = this.state.contacts[n];

        this.setState({ contactsFive: [...this.state.contactsFive, newContact] });
    }
      
    handleSortName = () => {
        console.log("sorted by name")
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;
          }
        this.setState({ contactsFive: [...this.state.contactsFive.sort(compare)] });
    }

    handleSortPopularity = () => {
        console.log("sorted by rating")
        function compare(a, b) {
            const popA = a.popularity;
            const popB = b.popularity;

            let comparison = 0;
            if (popA > popB) {
              comparison = 1;
            } else if (popA < popB) {
              comparison = -1;
            }
            return comparison * -1;
        }
        this.setState({ contactsFive: [...this.state.contactsFive.sort(compare)] });
    }

    handleDelete = (contactToRemoveId) => {
        const copyContacts = [...this.state.contactsFive]
        copyContacts.splice(contactToRemoveId, 1);
        
        this.setState({ contactsFive: copyContacts });
    }

    render() {
        
        return (
        
        <section>
            <button onClick={this.handleAddContact}>Add Random</button>
            <button onClick={this.handleSortName}>Name</button>
            <button onClick={this.handleSortPopularity}>Popularity</button>

            <div style={{ display: `flex`, justifyContent: `space-evenly`, flexWrap: `wrap`}}>
                {this.state.contactsFive.map((contact, _id) => (
                    <div style={{ display: `flex`, flexDirection: `column`, margin:`30px`}} key={_id}>
                        <img style={{width:`150px`}} src={contact.pictureUrl} alt=""/>
                        <p><strong>Name:</strong> {contact.name}</p>
                        <p><strong>Popularity:</strong> {contact.popularity}</p>
                        <button onClick={() => this.handleDelete(_id)}>Delete</button>
                    </div>
                ))}
            </div>

        </section>

        )
    }
}

export default Contacts;
