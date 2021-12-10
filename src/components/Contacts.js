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
    <div className="m-20">
      <h1 className="text-lg">IronContacts</h1>

      <h1>Change Contacts</h1>
      <button
        onClick={() => generateRandomContact()}
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Random Contacts
      </button>
      <h1>Sort</h1>
      <button
        onClick={() => sortByName()}
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sort by Name
      </button>
      <button
        onClick={() => sortByPopularity()}
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sort by Popularity{" "}
      </button>
      <div class="card-group">
        {addContact.map(({ name, pictureUrl, popularity }, index) => {
          return (
            <Contact
              key={index}
              name={name}
              pictureUrl={pictureUrl}
              popularity={popularity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
