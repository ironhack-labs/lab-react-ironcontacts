import React, { createContext, useState } from 'react';
import contactsJson from './../contacts.json';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  const addRandom = () => {  
    const min = Math.ceil(contacts.length);
    const max = Math.floor(contactsJson.length);
    setContacts([...contacts, contactsJson[Math.floor(Math.random() * (max - min + 1)) + min]]);
  }

  return(
    <ContactContext.Provider value={{contacts, addRandom}}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;