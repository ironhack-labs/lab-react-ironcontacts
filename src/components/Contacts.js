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

  //Creamos una nueva data
  const [sortContact, setSortContact] = useState(addContact);
  //Funciones de sort
  const sortByName = () => {
    console.log("name");
    //ordenar alfabeticamente DESC
    setSortContact([
      sortContact
        .sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          if (a.name === 0) return 0;
        })
        .reverse(),
    ]);
  };

  const sortByPopularity = () => {
    console.log("popularity");
    setSortContact([sortContact.sort((a, b) => b.popularity - a.popularity)]);
  };

  return (
    <>
      {/* <h1>Add new Contact</h1>
      <AddContact /> */}

      <h1>Change Contacts</h1>
      <button onClick={() => generateRandomContact()}>Random Contacts</button>

      <h1>Sort</h1>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>

      {addContact.map(({ name, pictureUrl, popularity, id }, index) => {
        return (
          <Contact
            key={index}
            name={name}
            pictureUrl={pictureUrl}
            popularity={popularity}
          />
        );
      })}
    </>
  );
};

export default Contacts;
