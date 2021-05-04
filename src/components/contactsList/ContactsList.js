import React from "react";
import "./ContactsList.css";
import contactsList from "../../contacts.json";
import ContactItem from "../contactItem/ContactItem";

class ContactList extends React.Component{

state = { contacts: contactsList.splice(0, 5) }

removeContact = (id) => {

  this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) })
}


sortContactsByPopularity = () => {
  const arrayCopy = [ ...this.state.contacts ];
  this.setState({ contacts: arrayCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity )});
}

sortContactsByName = () => {
  const arrayCopy = [ ...this.state.contacts ];
  this.setState({ contacts: arrayCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))});
}

addContact = () => {
  const arrayCopy = [...this.state.contacts];
  let randomNum = Math.floor(Math.random()* (arrayCopy.length));
  let randomContact = contactsList.splice(randomNum, 1);

  arrayCopy.push(randomContact[0]);

  this.setState({ contacts: arrayCopy });

}

displayContacts = () =>{
  return this.state.contacts.map((contact) =>{
    return(
      <ContactItem {...contact} removeItem={() => this.removeContact(contact.id)} key={contact.id} />
    )
  })
}

  render() {

    return (
      <div>
      <button onClick={() => this.addContact()}>Add Contact</button>
      <button onClick={() => this.sortContactsByPopularity()}>Order by popularity</button>
      <button onClick={() => this.sortContactsByName()}>Order by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.displayContacts()}
        </tbody>
      </table>
      </div>
    );
  }
}



export default ContactList;
