import "./App.css";
import React, {useState} from 'react';
import contacts from './contacts.json';

function App() {
  // Iteration 1: const firstFiveContacts = contacts.slice(0, 5);
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0, 5)); // Iteration 1 transformed to state for iteration 3.
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5)); // Iteration 3: get the remaining contacts (without the first five.

  // Iteration 3: get a random contact from the remaining contacts:
  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newContact = remainingContacts[randomIndex];

    // Update the displayed and remaining contacts with shallow copy [...] so that we don't modify the original array.
    setDisplayedContacts([...displayedContacts, newContact]);
    setRemainingContacts(remainingContacts.filter((contact) => contact.id !== newContact.id));
  };

  // Iteration 4:
  const sortByPopularity = () => {
    const sortedByPopularity = [...displayedContacts].sort((a, b) => b.popularity - a.popularity);
    setDisplayedContacts(sortedByPopularity);
  };

  const sortByName = () => {
    const sortedByName = [...displayedContacts].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedContacts(sortedByName);
  };

  // Iteration 5: 
  const deleteContact = (contactId) => {
    const updatedContacts = displayedContacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setDisplayedContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <div className='top-buttons'>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      
      <table className='table'>
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
          {/* In Iteration 1 it was firstFiveContacts.map(...) but it's been changed for iteration 3: */}
          {displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="picture of the contact" style={{ width: "50px" }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                {contact.wonOscar ? <p>🏆</p> : null}
              </td>
              <td>
                {contact.wonEmmy ? <p>🌟</p> : null}
              </td>

              {/* Another way to do it but doesn't pass the tests:
              <td>{contact.wonOscar
                            ? <p>("🏆")</p>
                            : <p>("")</p>
                        }
              </td>
              <td>{contact.wonEmmy
                            ? <p>("🌟")</p>
                            : <p>("")</p>
                        }
              </td> */}
              
              <td>
                {/* Iteration 5: */}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
