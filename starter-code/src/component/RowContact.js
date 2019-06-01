import React from 'react';

const RowContacts = ({contact, index}) => (
  <tr key={index}>
    <td className="w-25"><img className="w-50" src={contact.pictureUrl} alt={contact.name}/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity.toFixed(2)}</td>
  </tr>
);

export default RowContacts

