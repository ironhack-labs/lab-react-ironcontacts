import React from 'react';

const RowContacts = ({contact}) => (
  <tr>
    <td><img width="25%" src={contact.pictureUrl} alt={contact.name}/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
  </tr>
);

export default RowContacts