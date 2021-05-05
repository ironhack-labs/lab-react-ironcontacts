import React, { useState } from "react";
import Contacts from "../contacts.json";
import "./ContactList.css";

export default function ContactList() {
  let [contacts, setContact] = useState(Contacts.slice(0, 5));

  let addContact = () => {
    const newRandomContact =
      Contacts[Math.floor(Math.random() * (Contacts.length - 1) + 5)];

    setContact([...contacts, newRandomContact]);
  };

  const sortByName = () => {
    const sortContacs = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContact([...sortContacs]);
  };

  const sortByPopularity = () => {
    const sortContacs = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContact([...sortContacs]);
  };

  const remove = (id) => {
    const newList = contacts.filter((e) => {
      return e.id !== id;
    });

    setContact(newList);
  };

  return (
    <div className="">
      <h1 className="title"> IronContacts</h1>
      <button onClick={() => addContact()}> Add Random Contact</button>
      <button onClick={() => sortByName()}> Sort by Name</button>
      <button onClick={() => sortByPopularity()}> Sort by Popularity</button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {contacts.map((contact, id) => {
          return (
            <tr key={id}>
              <td>
                <img width="80px" src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => remove(contact.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
