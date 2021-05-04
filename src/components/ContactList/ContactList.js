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
  const {name, pictureUrl,popularity} = randomContact;

  copyContact.push({      
    name, pictureUrl, popularity
    });

  this.setState({ ironcontacts: copyContact });
}

displayContacts = () => {
  return this.state.ironcontacts.map((contact) => {
    return (               
            <tr>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>       
      )
    }
    )
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
          <tr>
            <th>Picture</th>
            <th >Name</th>
            <th >Popularity</th>
          </tr>
      {
        this.displayContacts()        
      }
      </table>
    </div>
  )    
}

}
export default ContactList;