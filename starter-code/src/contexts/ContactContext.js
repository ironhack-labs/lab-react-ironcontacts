import React, { createContext, useState } from 'react';
import contactsJson from './../contacts.json';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  const addRandom = () => {  
    const min = Math.ceil(contacts.length);
    const max = Math.floor(contactsJson.length);
    let newContact = {};
    do {
      newContact = contactsJson[Math.floor(Math.random() * (max - min + 1)) + min];
    } while(contacts.includes(newContact));

    setContacts([...contacts, newContact]);
  }

  const sortByName = () => {
    let newContacts = contacts.sort((a, b) => {
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    });
    setContacts([...newContacts]);
  }

  const sortByPopularity = () => {
    let newContacts = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts([...newContacts]);
  }

  const remove = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return(
    <ContactContext.Provider value={{contacts, addRandom, sortByName, sortByPopularity, remove}}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;