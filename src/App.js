import './App.css';
import contactData from './contacts.json';
import React, { useState } from 'react';

const contactList = contactData.splice(0, 5);
function App() {
  const [actorsList, setActorsList] = useState(contactList);
  console.log({ actorsList });
  const randomIndex = (max) => {
    return Math.random() * (max - 0) + 0;
  };

  const getRandomActor = () => {
    const randomContact = contactData.splice(
      randomIndex(contactData.length - 1),
      1
    );
    // contactList.push(randomContact);
    return randomContact[0];
  };

  const addActor = () => {
    const newContactList = [...actorsList];
    const newContact = getRandomActor();

    newContactList.push(newContact);
    setActorsList(newContactList);
  };

  const tableRows = actorsList.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="" style={{ height: '140px' }} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>
          {contact.wonOscar && (
            <img src="trophy.png" alt="" style={{ height: '40px' }} />
          )}
        </td>
        <td>
          {contact.wonEmmy && (
            <img src="trophy.png" alt="" style={{ height: '40px' }} />
          )}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <button onClick={addActor}>Get Random Actor</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default App;
