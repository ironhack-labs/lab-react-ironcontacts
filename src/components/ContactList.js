import React from 'react';

const ContactList = (props) => {
  const contacts = props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="" style={{ width: '100px' }} />
        </td>
        <td>{contact.name}</td>
        <td> {contact.popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => props.handleClick(contact.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <>{contacts}</>;
};

export default ContactList;
