import React, { useState } from 'react';
import Contacts from '../contacts.json';
import Contact from './Contact';
import ButtonContactGenerator from './ButtonContactGenerator';
import ButtonSort from './ButtonSort';

const ContactsTable = () => {
  const slicedContacts = Contacts.slice(0, 5);
  const [contacts, setContacts] = useState(slicedContacts);

  const deleteContact = (name) => {
    const contactsList = [...contacts];
    const contactIndex = contactsList.findIndex((item) => item.name === name);
    contactsList.splice(contactIndex, 1);
    setContacts(contactsList);
  };

  const generateRandomContact = (arr) => {
    const randomContact = arr[Math.floor(Math.random() * arr.length)];
    return randomContact;
  };

  const handleContacts = () => {
    const newContact = generateRandomContact(Contacts);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const sortByName = (arr) => {
    const contactsList = [...arr];
    let sortedContacts = contactsList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts;
  };

  const handleSortedNames = () => {
    const namesSortedList = sortByName(contacts);
    setContacts(namesSortedList);
  };

  const sortByPopularity = (arr) => {
    const contactsList = [...arr];
    let sortedContacts = contactsList.sort(
      (a, b) => b.popularity - a.popularity
    );
    return sortedContacts;
  };

  const handleSortedPopularity = () => {
    const popularitySortedList = sortByPopularity(contacts);
    setContacts(popularitySortedList);
  };

  const contactsList = contacts.map((contact) => (
    <Contact
      key={contact.name}
      picture={contact.pictureUrl}
      name={contact.name}
      popularity={contact.popularity}
      delete={() => deleteContact(contact.name)}
    />
  ));

  return (
    <div>
      <h1>IronContacts</h1>
      <ButtonContactGenerator generateContact={handleContacts} />
      <ButtonSort sort={handleSortedNames} cta="Sort by name" />
      <ButtonSort sort={handleSortedPopularity} cta="Sort by popularity" />
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{contactsList}</tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
