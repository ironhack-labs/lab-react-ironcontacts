import React, { useState } from 'react';
import Contacts from '../contacts.json';
import Contact from './Contact';
import ButtonContactGenerator from './ButtonContactGenerator';

const ContactsTable = () => {
  const slicedContacts = Contacts.slice(0, 5);
  const [contacts, setContacts] = useState(slicedContacts);
  const contactsList = contacts.map((contact) => (
    <Contact
      key={contact.name}
      picture={contact.pictureUrl}
      name={contact.name}
      popularity={contact.popularity}
    />
  ));

  const generateRandomContact = (arr) => {
    const randomContact = arr[Math.floor(Math.random() * arr.length)];
    return randomContact;
  };

  const handleContacts = () => {
    const newContact = generateRandomContact(Contacts);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  return (
    <div>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{contactsList}</tbody>
      </table>
      <ButtonContactGenerator generateContact={handleContacts} />
    </div>
  );
};

export default ContactsTable;
