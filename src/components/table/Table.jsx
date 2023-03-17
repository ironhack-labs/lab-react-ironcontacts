import React, { useEffect, useState } from "react";
import contactsJSON from "../../contacts.json";
import Row from "./Row";

const Table = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsJSON.slice(0, 5));
  }, []);

  return (
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
  );
};

export default Table;
