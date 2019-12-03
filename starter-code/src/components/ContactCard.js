import React from 'react';

const ContactCard = props => {
  const { contact, clickToDelete } = props;

  return (
    <tr>
      <td><img src={contact.pictureUrl} alt="" width="80" /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td>
        <button onClick={clickToDelete} className="btn-delete">DELETE</button>
      </td>
    </tr>
  );
}

export default ContactCard;