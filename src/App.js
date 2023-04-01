import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

function App() {

  const [currentContacts, setCurrentContacts] = useState(contacts.slice(0,5));

  const addRandomContact = () => {
    // filter out the currentContacts from the contacts array
    const filteredContacts = contacts.filter((contact) => {
      return !currentContacts.includes(contact);
    });

    // get a random contact from the filtered contacts
    const randomIndex = Math.floor(Math.random() * filteredContacts.length);
    const randomContact = filteredContacts[randomIndex];

    // add the random contact to the current contacts
    setCurrentContacts([...currentContacts, randomContact]);
  }

  // highest to lowest
  const sortByPopularity = () => {
    // sort the current contacts by popularity
    const sortedContacts = [...currentContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });

    // update the current contacts
    setCurrentContacts(sortedContacts);
  }


  // a to z
  const sortByName = () => {
    // sort the current contacts by name
    const sortedContacts = [...currentContacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    // update the current contacts
    setCurrentContacts(sortedContacts);
  }

  const deleteContact = contactId => {
    // filter out the contact with the given id
    const filteredContacts = currentContacts.filter((contact) => {
      return contact.id !== contactId;
    });

    // update the current contacts
    setCurrentContacts(filteredContacts);
  }




  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🏆' : ''}</td>
                <td>
                  <button onClick={()=>deleteContact(contact.id)}>Delete</button>
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
