import React from 'react';
import Contacts from '../contacts';

function FiveContacts() {
  const fiveContacts = Contacts.splice(0, 5);

  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {fiveContacts.map((item) => (
        <tr>
          <td>
            <img src={item.pictureUrl} alt={item.name} />
          </td>
          <td>{item.name}</td>
          <td>{item.popularity}</td>
        </tr>
      ))}
    </table>
  );
}

export default FiveContacts;
