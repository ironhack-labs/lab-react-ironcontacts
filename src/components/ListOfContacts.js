import React from "react";
import DataContacts from "../contacts.json";
import { useState } from "react";
import Random from './Random'
import SortByName from './SortByName'
import SortByPopularity from './SortByPopularity'

const firstFiveContact = DataContacts.slice(-4);

function ListOfContacts({ id }) {
  const [contacts, setContacts] = useState(firstFiveContact);
  const onDelete = (id) => {
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== id;
      })
    );
  };
  return (
    <div>
    <Random setContacts={setContacts} contacts={contacts} />
    <SortByName setContacts={setContacts} contacts={contacts} />
    <SortByPopularity setContacts={setContacts} contacts={contacts} />
      <h1>Iron Contacts</h1>
      <table key={id}>
        <thead>
          <tr>
            <th>
              <h1>Picture</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Popularity</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className="img--contact" src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfContacts;
