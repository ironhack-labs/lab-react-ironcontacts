import React from 'react';
import contacts from '../contacts.json';


function listContacts() {
  return contacts.map((e, idx) => {
    if(idx < 5) {
      return (
        <tr>
        <td><img src={e.pictureUrl} width="100px"/></td>
        <td>{e.name}</td>
        <td>{e.popularity}</td>
      </tr>
      )
    }
  });
}

function Contacts() {
  return (
    <div>

    </div>
  );
}

export default Contacts;

