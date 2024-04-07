import './ContactList.css';
import contactsData from "../../../data/contacts.json";
import { useState } from 'react';
import ContactItem from '../contact-item/ContactItem';

function ContactList() {
  
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5, contactsData.length)
  );
  
  const handleDeleteContact = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id));
  }

  const sortPopularity = () => {
    const newOrder = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(newOrder);
  }

  const sortName = () => {
    const newOrder = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(newOrder);
  }

  const handleAddContact = () => {
    const updateRemaining = [...remainingContacts];
    let randomNumber = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNumber, 1)[0];

    const updateContacts = [...contacts, randomContact];
    setContacts(updateContacts);
    setRemainingContacts(updateRemaining);
  }

  return (
    <>
    <button className="btn btn-primary m-3" onClick={handleAddContact}>Add Random Contact</button>
    <button className="btn btn-primary m-3" onClick={sortPopularity}>Sort By Popularity</button>
    <button className="btn btn-primary m-3" onClick={sortName}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>

          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} onDelete={handleDeleteContact} />
          ))}
        </tbody>
      </table>	
    </>



  )
}

export default ContactList;