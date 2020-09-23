import React from 'react';

const contactInfo = (contact) => {
  return (
    <tr key={contact.id}>
      <td colSpan="3">
        <img src={contact.pictureUrl} />
      </td>
      <td colSpan="3"> {contact.name} </td>
      <td colSpan="3"> {contact.popularity} </td>
    </tr>
  );
};
export default contactInfo;
