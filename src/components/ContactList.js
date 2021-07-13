import { Component } from "react"
import contact from './../contacts.json'
import ContactCard from './ContactCard'
import React, { useState } from 'react';


const contactTop5 = contact.slice(0, 5)

 class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            contactTop5
        }
    }

    render() {
        return (
            this.state.contactTop5.map(elm => <ContactCard key={elm.id} {...elm} />)
        )
    }
}

// function ContactList() {
//     const [contacts, setContacts] = useState(contact.slice(0,5));

//     return
//     {contacts.map((contacts => 
//     <tr key={contact.id}>
//         <td><img src={contact.pictureUrl} alt={contact.name} /></td>
//             <td>{contact.name}</td>
//             <td>{Math.floor(contact.popularity)}</td>
//             </tr>
//     ))}
// }

export default ContactList