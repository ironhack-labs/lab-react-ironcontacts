import React from "react";
import "./ContactsList.css";
import contactsList from "../../contacts.json";
import ContactItem from "../contactItem/ContactItem";

class ContactList extends React.Component{

state = { contacts: contactsList }

displayContacts = () =>{
  return this.state.contacts.map((contact) =>{
    return(
      <ContactItem {...contact} key={contact.id}/>
    )
  })
}

  render() {

    return (
      <table>
        <thead>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </thead>
        <tbody>
          <tr>{this.displayContacts()}</tr>
        </tbody>
      </table>
    );
  }
}



export default ContactList;
