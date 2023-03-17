import React, { useEffect, useState } from "react";
import contactsJSON from "../../contacts.json";
import Row from "./Row";

const Table = () => {
  const [contacts, setContacts] = useState([]);
  const [sorted, setSorted] = useState(true);

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

  useEffect(() => {
    setContacts((prev) => prev);
  }, [sorted]);

  const handleSortPopularity = () => {
    setContacts((prev) => prev.sort((a, b) => b.popularity - a.popularity));
    setSorted(!sorted);
  };

  const handleSortName = () => {
    setContacts((prev) => prev.sort((a, b) => a.name.localeCompare(b.name)));
    setSorted(!sorted);
  };

  return (
    <>
      <button onClick={handleAddRandom}>Add Random Contact</button>
      <button onClick={handleSortPopularity}>Sort by Popularity</button>
      <button onClick={handleSortName}>Sort by Name</button>

      <table className="table-container">
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Row key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
