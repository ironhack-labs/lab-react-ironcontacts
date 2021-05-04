import React from "react";
import "./ContactsList.css";
import contactData from "../../contacts.json";
import ContactItem from "../contactItem/ContactItem";

const contactsList = [...contactData]
const firstContacts = contactsList.splice(0, 5)

class ContactList extends React.Component{

state = { contacts: firstContacts }

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
  if(contactsList.length > 0) {
    let randomNum = Math.floor(Math.random() * contactsList.length);
    let randomContact = contactsList.splice(randomNum, 1);
    console.log(randomContact)

    const arrayCopy = [...this.state.contacts];
    arrayCopy.push(randomContact[0]);

    this.setState({ contacts: arrayCopy });
  }

}

displayContacts = () =>{
  return this.state.contacts.map((contact) =>{
    return(
      <ContactItem {...contact} removeItem={() => this.removeContact(contact.id)} key={contact.id} />
    )
  })
}

render() {
  console.log(this.state.contacts)
  console.log(contactsList.length)
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
      { this.displayContacts() }
      </tbody>
      </table>
      </div>
    );
  }
}

export default ContactList;
