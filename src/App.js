import logo from './logo.svg';
import './App.css';
import contactsList from './contacts.json'
import { useState } from 'react';

let firstSetOfContacts = []
for (let i = 0; i < 5; i++) {
  firstSetOfContacts.push(contactsList[i])
}

function App() {
  const [contacts, setContacts] = useState(firstSetOfContacts);

  let addRandomContact = () => {
    let newContact = contactsList[Math.floor(Math.random() * (contactsList.length - 5) + 5)]
    console.log(contactsList.indexOf(newContact));
    let duplicate = contacts.some(contact => newContact.id === contact.id)
    if (!duplicate) {
      contacts.unshift(newContact);
    }
    let newArrayWithRandomContacts = [...contacts]
    setContacts(newArrayWithRandomContacts);
    return newArrayWithRandomContacts
  }

  let sortByName = () => {
    let sortedNamesArray = contacts.sort((a, b) => a.name.localeCompare(b.name))
    console.log(sortedNamesArray);
    let newSortedNamesArray = [...sortedNamesArray]
    setContacts(newSortedNamesArray)
    return newSortedNamesArray
  }

  let sortByPopularity = () => {
    let sortedPopularityArray = contacts.sort((a, b) => b.popularity - a.popularity)
    console.log(sortedPopularityArray);
    let newSortedPopularityArray = [...sortedPopularityArray]
    setContacts(newSortedPopularityArray)
    return newSortedPopularityArray
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <div class='container'>
        <div class='row'>
          <h2>IronContacts</h2>
        </div>
        <div class='row'>
          <button class='col-md-4 btn btn-primary' onClick={() => addRandomContact()}> Add Random Contact </button>
          <button class='col-md-4 btn btn-primary' onClick={() => sortByName()}>Sort By Name</button>
          <button class='col-md-4 btn btn-primary' onClick={() => sortByPopularity()}>Sort By Popularity</button>
        </div>
      </div>
      <div class='container'>
        <table >
          <tr class='row'>
            <th class='col-md-2'>Picture</th>
            <th class='col-md-2'>Name</th>
            <th class='col-md-2'>Popularity</th>
            <th class='col-md-2'>Won Oscar</th>
            <th class='col-md-2'>Won Emmy</th>
            <th class='col-md-2'>Delete</th>
          </tr>
        </table>
      </div>
      <div>
        {contacts.map(contact => {
          return (
            <div class='container'>
              <table>
                <tr class='row' key={contact.id}>
                  <td class='col-md-2'><img src={contact.pictureUrl} alt='contact-image' /></td>
                  <td class='col-md-2'>{contact.name}</td>
                  <td class='col-md-2'>{contact.popularity}</td>
                  <td class='col-md-2'>{contact.wonOscar ? '🏆' : ''}</td>
                  <td class='col-md-2'>{contact.wonEmmy ? '🏆' : ''}</td>
                  <td class='col-md-2'><button onClick={() => deleteContact(contact.id)} className="btn btn-primary btn-delete">Delete</button></td>
                </tr>
              </table>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}

export default App;
