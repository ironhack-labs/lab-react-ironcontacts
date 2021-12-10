import React, { useState } from "react";
import Contact from "./Contact";
import contacts from "./../contacts.json";
import AddContact from "./AddContact";
const Contacts = () => {
  const data = contacts.slice(0, 5);

  const [addContact, setAddContact] = useState(data);
  const random = Math.floor(Math.random() * contacts.length);

  const generateRandomContact = () => {
    setAddContact([...addContact, contacts[random]]);
  };

  return (
    <>
      {/* <h1>Add new Contact</h1>
      <AddContact /> */}

      <h1>Change Contacts</h1>
      <button onClick={() => generateRandomContact()}>Random Contacts</button>

      {addContact.map(({ name, pictureUrl, popularity, id }) => {
        return (
          <Contact
            key={id}
            name={name}
            pictureUrl={pictureUrl}
            popularity={popularity}
            id={id}
          />
        );
      })}
    </>
  );
};

export default Contacts;
