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

  return (
    <div className="">
      <h1 className="title"> IronContacts</h1>
      <table className="table">
        <button onClick={() => addContact()}> Add Random Contact</button>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}
