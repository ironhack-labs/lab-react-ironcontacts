import React from 'react';
import './Contact.css';

const Contact = ({contact, deleteButton}) => {

  return (
    <tr className='tableRow' key={contact.id}>
      <th><img className='contactImage' src={contact.pictureUrl} alt={contact.name}></img></th>
      <th><p>{contact.name}</p></th>
      <th>{contact.popularity.toFixed(2)}</th>
      <th><button onClick={() => deleteButton(contact.id)}>Delete</button></th>
    </tr>
  );
};

export default Contact;