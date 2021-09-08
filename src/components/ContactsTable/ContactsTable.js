import React from "react";

import "./ContactsTable.css";

const ContactsTable = (props) => {
  return (
    <table className="main-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => (
          <tr key={contact.id}>
            <th>
              <img src={contact.pictureUrl} alt="img" />
            </th>
            <th>{contact.name}</th>
            <th>{contact.popularity.toFixed(2)}</th>
            <th>
              <button onClick={() => props.deleteCt(contact.id)}>Delete</button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsTable;
