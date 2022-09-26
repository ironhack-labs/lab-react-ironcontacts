import React, { Component } from "react";

import contacts from '../../contacts.json'
import ContactItem from "./ContactItem/ContactItem";

class Contacts extends Component {
    
    state = {
        contacts: [...contacts.slice(0, 5)]
    }

    render() {
        const { contacts } = this.state

        return (
            <div className="Contacts" mt-4>
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Won an Oscar</th>
                        <th scope="col">Won an Emmy</th>
                       </tr>
                       </thead>
                {contacts.map((contact, i) => (
                    <ContactItem key={contact.id} {...contact} number={i + 1} />
                ))}
                </table>
                </div>
        )

    }
}

export default Contacts;
