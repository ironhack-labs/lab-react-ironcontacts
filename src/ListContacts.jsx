import React, { useState } from "react";
import contacts from "./contacts.json";

function ListContacts() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contacts.slice(5)
  );

  function getRandomContact() {
    if (!Array.isArray(remainingContacts) || remainingContacts.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newContact = remainingContacts[randomIndex];
    const updatedRemainingContacts = remainingContacts.filter(
      (contact) => contact.id !== newContact.id
    );
    setContactList((prevContacts) => [...prevContacts, newContact]);
    setRemainingContacts(updatedRemainingContacts);
  }

  function sortByName() {
    const sorted = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sorted);
  }

  function sortByPopularity() {
    const sorted = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sorted);
  }

  function handleDeleteContact(id) {
    const updatedContactList = contactList.filter(
      (contact) => contact.id !== id
    );
    setContactList(updatedContactList);
  }

  return (
    <>
      <div className="mt-2">
        <h1>Lista de Contactos</h1>
      </div>
      <div className="mt-4">
        <button className="m-2" onClick={getRandomContact}>Add Random Contact</button>
        <button className="m-2" onClick={sortByName}>Sort by Name</button>
        <button className="m-2" onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <div style={{ width: '100%' }} className="mt-4">
        <table className="table">
          <thead className="text-center ">
            <tr className="my-5">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {contactList.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="100"
                    height="100"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : null}</td>
                <td>{contact.wonEmmy ? "🏆" : null}</td>
                <td>
                  <button onClick={() => handleDeleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListContacts;