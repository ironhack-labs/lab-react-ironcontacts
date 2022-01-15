import { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

const fiveContacts = contacts.filter((contact, index) => index < 5);
const remainingContacts = contacts.filter((contact, index) => index >= 5);

function App() {
  const [contactList, setContactList] = useState(fiveContacts);
  const [remainingContactList, setRemainingContactList] =
    useState(remainingContacts);

  const random = () => {
    return Math.floor(Math.random() * (remainingContactList.length - 1));
  };

  const handleAddContact = () => {
    let randomNumber = random();
    const newList = [...contactList];
    const remaining = [...remainingContactList];
    newList.push(remainingContactList[randomNumber]);
    remaining.splice(randomNumber, 1);
    setRemainingContactList(remaining);
    setContactList(newList);
  };

  const handleSortName = () => {
    const sortList = [...contactList];
    sortList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactList(sortList);
  };

  const handleSortPopularity = () => {
    const sortList = [...contactList];
    sortList.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactList(sortList);
  };

  const handleDeleteContact = (id) => {
    const newList = contactList.filter((contact) => contact.id !== id);
    const remaining = [...remainingContactList];
    const removed = contactList.find((contact) => contact.id);
    remaining.push(removed);
    setRemainingContactList(remaining);
    setContactList(newList);
  };

  return (
    <div className="container">
      <h1>IronContacts</h1>
      <div className="contactsActions">
        <button onClick={() => handleAddContact()}>Add new contact</button>
        <button onClick={() => handleSortName()}>Sort by name</button>
        <button onClick={() => handleSortPopularity()}>
          Sort by popularity
        </button>
      </div>
      <table className="contactsTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td className="contactsPicture">
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
