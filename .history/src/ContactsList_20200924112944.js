import React from 'react';

export default function ContactsList(props) {
  const filtered = props.contatcs.filter((contact) =>
    contact.name.toLowerCase().includes(props.query.toLowerCase())
  );

  const contacts = filtered.props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} width="100px" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          <button
            className="btn"
            onClick={(e) => props.deleteContact(contact.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  console.log(contacts);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {contacts}
      </table>
    </div>
  );
}
