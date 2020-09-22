import React from 'react';

const contactInfo = (contact) => {
  return (
    <tr key={contact.id}>
      <td>
        <img src={contact.pictureUrl} />
      </td>
      <td> {contact.name} </td>
      <td> {contact.popularity} </td>
    </tr>
  );
};
export default contactInfo;
