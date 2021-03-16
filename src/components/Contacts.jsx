import React, { Component } from 'react'
import contactsJSON from "./../contacts.json";

// console.log(contactsJSON);
class Contacts extends Component {

    state = {
        contacts: contactsJSON.slice(0, 5)
    }

    render() {
        // console.log(this.state.contacts)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact => {
                            <tr>{contact.name}</tr>
                        }))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Contacts