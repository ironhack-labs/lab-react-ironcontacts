import React from 'react';
const Contacts = (contact) => {
  return (
    <tr>
      <td><img alt="imagActores" src={contact.pictureUrl}></img></td>
        <td><p>{contact.name}</p></td>        
        <td><p>{contact.popularity}</p></td>
        <td><button onClick={contact.deleteContacts}>Delete</button></td>
        
    </tr>
  )
};

export default Contacts;