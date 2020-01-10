import React, { Component } from 'react'
import contacts from '../../contacts'
import ContactCard from './ContactCard'
import './ContactsList.css'

class ContactsList extends Component {
    state = {
        contacts: [...contacts] || []
    }

    listContacts = () => 
        this.state.contacts.map( (c,i) => (
            <ContactCard 
                key={i}
                {...c}
            />
        ))
    
    render() {
      return (
        <div className="ContactsList d-flex justify-content-center">
            <table>
                <thead>
                    <tr>
                        <td>PICTURE</td>
                        <td>NAME</td>
                        <td>POPULARITY</td>
                    </tr>
                </thead>
                <tbody>
                    {this.listContacts()}
                </tbody> 
            </table>
        </div>   
      )
    }
}

export default ContactsList