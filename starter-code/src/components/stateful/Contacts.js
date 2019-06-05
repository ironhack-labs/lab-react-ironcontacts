import React, { Component } from 'react';

import contacts from '../../contacts.json'

class Contacts extends Component {

    constructor() {

        super()

        this.state = {
            contacts,
            contactsToDisplay: contacts.slice(0, 5)
            
          }
        }
        
        
    addRandomContact = () => {
      const contactsCopy = [...this.state.contactsToDisplay]
      const randomContact = Math.floor(Math.random() * ((this.state.contacts.length + 1) - 0)) + 0;
      contactsCopy.push(this.state.contacts[randomContact])
      this.setState({
        contactsToDisplay: contactsCopy
      })
    }
    sortByName = () => {
      const contactsCopy = [...this.state.contactsToDisplay]
      contactsCopy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
      this.setState({
        contactsToDisplay: contactsCopy
      })
    }
    sortByPopularity = () => {
      const contactsCopy = [...this.state.contactsToDisplay]
      contactsCopy.sort((a,b) => (b.popularity > a.popularity) ? 1 : ((a.popularity > b.popularity) ? -1 : 0)); 
      this.setState({
        contactsToDisplay: contactsCopy
      })
    }
    deleteContact = idx => {
      const contactsCopy = [...this.state.contactsToDisplay]
      contactsCopy.splice(idx, 1)
      this.setState({
        contactsToDisplay: contactsCopy
      })
    }

    render() {
      // this.state.contacts.map((contact, idx)=> 
      //   idx < 5 && this.state.contactsToDisplay.length < 5 ? this.state.contactsToDisplay.push(contact)
      //   : null
      // )
      return (        
        <div>
          <button onClick={() => this.addRandomContact()}>Add random contact</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
          <table>
            <thead>
            <tr><th>IronContacts</th></tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              { 
                this.state.contactsToDisplay.map((contact, idx)=> 
                <tr key={idx}>                 
                  <td><img src={contact.pictureUrl} alt={contact.name} width="100px"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={() => this.deleteContact(idx)}>Delete</button></td>
                </tr>                
                ) 
              }
            </tbody>
          </table>
        </div>
      )
    }
}

export default Contacts