import React from 'react';
import ButtonActions from './ButtonAction';

const RowContacts = ({contact, index, deleteContact}) => (
  <tr key={index}>
    <td className="w-25"><img className="w-50" src={contact.pictureUrl} alt={contact.name}/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity.toFixed(2)}</td>
    <td><ButtonActions text="Delete" action={()=> deleteContact(contact)} /></td>
  </tr>
);

export default RowContacts

