import React from 'react';

export default function ContactsList(props) {
  const contacts = props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="Photo" width="90px" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => this.delete(contact.id)}>Delete</button>
        </td>
      </tr>
    );
  });
  console.log(contacts);
  return (
    <table className="table">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
      {contacts}
    </table>
  );
}
