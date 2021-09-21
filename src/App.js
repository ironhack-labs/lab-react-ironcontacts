import './App.css';
import React, {useState} from 'react';
import contacts from './contacts.json';

function App() {
  const newContacts = contacts.slice(0, 5);
  const [shownContacts, setShownContacts] = useState(newContacts);

  const showAllContacts = () => {
    if (shownContacts.length > 0) {
      return shownContacts.map((value, index) => {
        return (
          <div key={index}>
            <li>{value.name}</li>
            <button type="button" onClick={() => deleteContact(value.id)}>
              Delete
            </button>
          </div>
        );
      });
    }
  };

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];

    setShownContacts(shownContacts.concat([randomContact]));
  };

  const sortByName = () => {
    setShownContacts(
      shownContacts.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
    return;
  };

  const deleteContact = (id) => {
    setShownContacts(shownContacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <button type="button" onClick={sortByName}>
        Sort by Name
      </button>
      <ul>{showAllContacts()}</ul>
      <button type="button" onClick={addRandomContact}>
        Add a random Contact!
      </button>
    </div>
  );
}

export default App;
