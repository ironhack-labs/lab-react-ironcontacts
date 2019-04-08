import React from 'react';
import '../App.css';

function ContactCard({ contact }) {
  const { name, pictureUrl, popularity } = contact;
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="name" />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>      
    </tr>
  );
}
export default ContactCard;