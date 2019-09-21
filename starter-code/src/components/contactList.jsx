import React, { Component } from 'react';
class ContactList extends Component {

    displayContacts = () => {

        return this.props.filteredContacts.map((contact, index) => {
            return (
                <li key={index}
                    style={{
                        border: "solid black 1px",
                        padding: "10px",
                        margin: "10px",
                        width: "50%"
                    }}
                >
                    <h5>{contact.name}</h5>
                    <img style={{
                        height: "300px",
                        width: "220px"
                    }}
                        src={contact.pictureUrl} alt="" />
                    <p>{contact.popularity}</p>
                    <button onClick={() => this.props.onItemRemove(index)} >
                        delete
                    </button>
                </li>
            )

        })
    }


    render() {
        return (
            <div>
                {this.displayContacts()}
                <button
                    onClick={this.props.onContactAdd}
                >
                    Add Random Contact
                </button>
            </div>
        );
    }
}

export default ContactList;