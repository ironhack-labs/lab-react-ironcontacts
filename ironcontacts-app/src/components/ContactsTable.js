import './ContactsTable.css'
import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactInfo from './ContactInfo'

class ContactsTable extends Component {

    constructor() {
        super()
        this.state = {

            contactsArray: [...contacts].slice(0, 5)
        }
    }

    removeContact = contactIdToDelete => {
        this.setState({
            contactsArray: this.state.contactsArray.filter(elm => elm.id != contactIdToDelete)
        })
    }

    addRandomContact = () => {
       
        let randomContactFromContactsArray = contacts[Math.floor(Math.random() * contacts.length)];
        const newContactsArray = this.state.contactsArray.push(randomContactFromContactsArray)
        this.setState({contactsArray: newContactsArray})

    }

    sortByName = () => {
        this.state.contactsArray.sort(function (a, b) {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
        this.setState({
          contactsArray: this.state.contactsArray
          })
    }

    sortByPopularity = () => {
        this.state.contactsArray.sort(function (a, b) {
            return b.popularity - a.popularity
        });
        this.setState({
          contactsArray: this.state.contactsArray
          })
    }

    render() {

        const contactsArray = this.state.contactsArray
       
   return(
<>
<table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
    
  </tr>
  <tr>
    <td>{contactsArray.map(elm => <ContactInfo key={elm.id} deleteContact={() => this.removeContact(elm.id)} picture={elm.pictureUrl} name={elm.name} popularity={elm.popularity} /> )}</td>
</tr>

</table>

<button onClick={this.addRandomContact} className="random-button">Add random contact</button>
<button onClick={this.sortByName} className="random-button">Sort by name</button>
<button onClick={this.sortByPopularity} className="random-button">Sort by popularity</button>


</>
   )

}

}

export default ContactsTable