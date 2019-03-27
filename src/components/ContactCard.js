import React from 'react';
import CoolButton from './CoolButton';
import '../App.css';

function ContactCard({ contact, index, deleteContactBtn }) {
  const { name, pictureUrl, popularity } = contact;
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="name" />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td><CoolButton OnClick={() => deleteContactBtn(index)}>Delete</CoolButton></td>
      
    </tr>
  );
}
export default ContactCard;
