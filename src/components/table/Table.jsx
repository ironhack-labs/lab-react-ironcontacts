import React, { useEffect, useState } from "react";
import contactsJSON from "../../contacts.json";
import Row from "./Row";

const Table = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsJSON.slice(0, 5));
  }, []);

  const handleAddRandom = () => {
    const notRepeatedArr = [];

    contactsJSON.forEach((contactJSON) => {
      const findObject = contacts.some(
        (contactState) => contactJSON === contactState
      );

      if (!findObject) notRepeatedArr.push(contactJSON);
    });

    const randomContact =
      notRepeatedArr[Math.floor(Math.random() * notRepeatedArr.length)];

    if (randomContact) setContacts((prev) => [...prev, randomContact]);
  };

  const handleSortPopularity = () => {
    setContacts((prev) =>
      prev
        .map((contact) => contact)
        .sort((popA, popB) => popB.popularity - popA.popularity)
    );
  };

  const handleSortName = () => {
    setContacts((prev) =>
      prev
        .map((contact) => contact)
        .sort((nameA, nameB) => nameA.name.localeCompare(nameB.name))
    );
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div className="btns">
        <button onClick={handleAddRandom}>Add Random Contact</button>
        <button onClick={handleSortPopularity}>Sort by Popularity</button>
        <button onClick={handleSortName}>Sort by Name</button>
      </div>

      <table className="table-container">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Row
              key={contact.id}
              contact={contact}
              handleDelete={() => handleDelete(contact.id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
