import React from "react";
import { useState } from "react";
import contactsJson from "../contacts.json";
import Contact from "./Contact";

function ContactsList() {
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));
  const onAddRandom = () => {
    setContacts((prevs) => {
      const contactsFiltered = contacts.filter((contact) =>
        prevs.every((prev) => prev.id !== contact.id)
      );
      return [
        ...prevs,
        contactsFiltered[
          Math.floor(Math.random() * (contactsFiltered.length - 1))
        ],
      ];
    });
  };

  const handleContactDelete = (id) => {
    setContacts((prevs) => {
      return prevs.filter((prev) => prev.id !== id);
    });
  };

  return (
    <div>
      <button className="btn btn-outline mb-4" onClick={onAddRandom}>
        Add random contact
      </button>
      <h1 className="m-4 mb-4 fw-bold">IronConstats</h1>
      <table className="table m-2">
        <thead>
          <tr>
            <th scope="col m-3"></th>
            <th scope="col m-3">Picture</th>
            <th scope="col m-3">Name</th>
            <th scope="col m-3">Popularity</th>
            <th scope="col m-3">
              Won <br />
              Oscar
            </th>
            <th scope="col m-3">
              Won <br />
              Emmy
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              onClickDelete={() => handleContactDelete(contact.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsList;
