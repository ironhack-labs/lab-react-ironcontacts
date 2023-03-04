import './App.css';
import contactData from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [contact] = useState(() => {
    const contactTable = contactData
      .map((contact) => {
        return (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="" Style="height:190px;" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>
              {contact.wonOscar && (
                <img src="trophy.png" alt="" Style="height:40px" />
              )}
            </td>
            <td>
              {contact.wonEmmy && (
                <img src="trophy.png" alt="" Style="height:40px" />
              )}{' '}
            </td>
          </tr>
        );
      })
      .slice(0, 5);

    return contactTable;
  });

  return (
    <div>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>{contact}</tbody>
      </table>
    </div>
  );
}

export default App;
