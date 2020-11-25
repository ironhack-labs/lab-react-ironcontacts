import './App.css';
import contacts from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [contactList, setContacts] = useState(contacts.slice(0, 5));

  const randomContact = () => {
    const copyContact = [...contactList];
    const random = contactList[Math.floor(Math.random() * contactList.length)];
    copyContact.push(random);
    setContacts(copyContact);
  };

  return (
    <div className="contactsList">
      <button onClick={randomContact}>Add another contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactList.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.pictureUrl} alt="contact" />
            </td>
            <td>{item.name}</td>
            <td>{item.popularity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
