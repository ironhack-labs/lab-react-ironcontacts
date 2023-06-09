import contactData from '../contacts.json';
import React, { useState } from 'react';

function ContactList() {
  const [contact, updateContact] = useState(() => {
    const contactTable = contactData
      .map((contact) => {
        return (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="" Style="height:190px;" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
        );
      })
      .slice(0, 5);

    return contactTable;
  });

  return (
    <div>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        <tbody>{contact}</tbody>
      </table>
    </div>
  );
}

export default ContactList;
