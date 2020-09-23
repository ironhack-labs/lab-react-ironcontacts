import React from 'react';
import './contactsTable.css';

export default function ContactsTable(props) {
  const contactsList = props.contactsList.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img
            className="contact-img"
            src={contact.pictureUrl}
            alt={contact.name}
          ></img>
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody className="contact-container">{contactsList}</tbody>
      </table>
    </div>
  );
}
