import React from 'react';
import '../App.css';
import CoolButton from './CoolButton';

function ContactCard({ contact, index, deleteContactButton }) {
  const { name, pictureUrl, popularity } = contact;
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="name" />
      </td>
      <td className="td-data">{name}</td>
      <td className="td-data">{popularity.toFixed(2)}</td> 
      <td className="td-data"><CoolButton onClick={() => deleteContactButton(index)}>Delete</CoolButton></td>     
    </tr>
  );
}
export default ContactCard;