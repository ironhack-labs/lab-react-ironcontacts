import React, { useState, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';

const App = () => {

  const [contactState, setContactState] = useState([]);
  const contactsNew = [...contactState];

  useEffect(() => {
    setContactState(contacts.splice(0, 5));
  }, []);

  const addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    setContactState([...contactsNew, randomContact]);
  };

  const sortByName = () => {
    contactsNew.sort((first, second) =>
      first.name < second.name ? -1 : first.name > second.name ? 1 : 0
    );
    setContactState([...contactsNew]);
  };

  const sortByPopularity = () => {
    contactsNew.sort((first, second) => second.popularity - first.popularity);
    setContactState([...contactsNew]);
  };

  function deleteContact (idx) {
    contactsNew.splice(idx, 1);
    setContactState([...contactsNew]);
  };

  return (
    <div className="App">
      
      <h2>IronContacts</h2>

      <table>
        
        <thead>
          <tr>
            <th className="button"><button onClick={addRandomContact}>Add random contact</button></th>
            <th className="button"><button onClick={sortByName}>Sort by name</button></th>
            <th className="button"><button onClick={sortByPopularity}>Sort by popularity</button></th>
          </tr>
          <tr>
            <th className="contacts-table-info">Picture</th>
            <th className="contacts-table-info">Name</th>
            <th className="contacts-table-info">Popularity</th>
          </tr>
        </thead>

        {contactsNew.map((contact, idx) => {
          return (
            <tbody key={contact.id}>
              <tr className="contacts-table">
                <td className="contacts-table-img">
                  <img src={contact.pictureUrl} alt={contact.name}></img>
                </td>
                <td className="contacts-table-info">{contact.name}</td>
                <td className="contacts-table-info">{contact.popularity}</td>
                <td>
                  <button onClick={() => deleteContact (idx)}>Delete Contact</button>
                </td>
              </tr>
            </tbody>
          );
        })}

      </table>
    </div>
  )
};

export default App;
