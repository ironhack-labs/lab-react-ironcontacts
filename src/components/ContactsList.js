import React from 'react';

export default function ContactList(props) {
  const contacts = props.contact.map((person) => {
    return (
      <tr key={person.id}>
        <td>
          <img src={person.pictureUrl} alt="" width="50" position="center" />
        </td>
        <td>{person.name} </td>
        <td>{person.popularity}</td>
      </tr>
    );
  });
  return (
    <div>
      <table key="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts}
      </table>
    </div>
  );
}
