import React, { createContext, useState } from 'react';
import contactsJson from './../contacts.json';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  return(
    <ContactContext.Provider value={{contacts}}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;