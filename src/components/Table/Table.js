import React from 'react';

const Table = ({ data }) => {
  const showContacts = [];
  for (let i = 0; i < 5; i++) {
    showContacts[i] = data[i];
  }

  return (
    <main>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        {showContacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="" srcset="" />
            </td>
            <td>{contact.name}</td>
            <td>{parseFloat(contact.popularity).toFixed(2)}</td>
          </tr>
        ))}
      </table>
    </main>
  );
};

export default Table;
