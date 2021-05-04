import React from 'react';
import contacts from "./../../contacts.json"; 
import './ContactList.css';

const fiveContacts = contacts.slice(0,5)
const otherContacts = contacts.slice(5,53)

console.log(contacts)
console.log(otherContacts)

class ContactList extends React.Component{
 state = {
  ironcontacts: fiveContacts
 }

 addContact = () => {
  const copyContact = [ ...this.state.ironcontacts ];  
  const randomContact = otherContacts[Math.floor(Math.random()*otherContacts.length)]    

  copyContact.push(randomContact);
  
  this.setState({ ironcontacts: copyContact });
}

displayContacts = () => {
  return this.state.ironcontacts.map((contact) => {
    return (   
      //TODO:            
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><button onClick={() => this.removeContact(contact.id)}  >Delete</button></td>
            </tr>       
      )
    }
    )
  }
 
  removeContact = (id) => {
    const copyContact = [ ...this.state.ironcontacts ]; 
    console.log(id)
    this.setState({ ironcontacts: copyContact.filter(contact => contact.id !== id) });
    
  }

  sortByName = () => {
    const copyContact = [ ...this.state.ironcontacts ];  
    
    this.setState({ ironcontacts: copyContact.sort((contact1, contact2) => contact1.name > contact2.name ? 1 : -1) });
    console.log(copyContact)
  }

  sortByPopularity = () => {
    const copyContact = [ ...this.state.ironcontacts ];
    this.setState({ ironcontacts: copyContact.sort((contact1, contact2) => contact2.popularity - contact1.popularity)});
  }

render() {
  return(
    <div>
        <button onClick={() => this.addContact()}>Add contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
      <table>
      <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>            
          </tr>
      </thead>
      <tbody>
      {
        this.displayContacts()       
      }
      </tbody>
      </table>
    </div>
  )    
}

}
export default ContactList;