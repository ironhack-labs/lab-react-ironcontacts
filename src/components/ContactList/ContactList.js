
import React from 'react';

import contacts from "./../../contacts.json"; 
import './ContactList.css';

const fiveContacts = contacts.slice(0,5)

console.log(contacts)
class ContactList extends React.Component{
 state = {
  ironcontacts: fiveContacts
 }

displayContacts = () => {
  return this.state.ironcontacts.map((contact) => {
    return (
      <div className="App">
      <table>
            <tr>
              <th>Picture</th>
              <th >Name</th>
              <th >Popularity</th>
            </tr>
            <tr>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
     </table>
     </div>
      )
    }
    )
  }
  


render() {
  return(
    <div>
    {
      this.displayContacts()
    }

    </div>
  )
    
}

}
export default ContactList;