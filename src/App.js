import contactsArr from './contacts.json';
import './App.css';
import { useState } from 'react';

function App() {
  let fiveContacts = contactsArr.slice(0, 5)
  // console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);
  const newContactsArr = contactsArr.slice(5);
  // console.log(newContactsArr);
  const randomIndex = Math.floor(Math.random() * newContactsArr.length);
  const newContact = newContactsArr[randomIndex];
  const displayedContacts = [...contacts, newContact]

  const randomContact = () => {
   return setContacts(displayedContacts)
  }
  const sortByName = () => {
    const sortedByName = [...contacts.sort((a, b) => { return (a.name > b.name ? 1 : (a.name === b.name ? 0 : -1)) })]
    return setContacts(sortedByName);
  }
  const sortByPopularity = () => {
    const sortedByPopularity = [...contacts.sort((a, b) => { return (a.popularity > b.popularity ? -1 : (a.popularity === b.popularity ? 1 : 0)) })]
    return setContacts(sortedByPopularity);
  }
  const deleteContact = (id) => {
    return setContacts([...contacts].filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className='Buttons'>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Acctions</th>
          </tr>
          {
            contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                  <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;