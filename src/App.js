import './App.css';
import allContacts from '../src/contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5))
  console.log("App contacts:", contacts)

  function addContact() {
    const otherContacts = allContacts.slice(5).filter(contact => contacts.includes(contact) === false);
    const randomContact = otherContacts[Math.floor(Math.random() * otherContacts.length)]
    setContacts([randomContact, ...contacts])
  }

  function sortByName() {
    setContacts([...contacts].sort((a,b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0))
  }

  function sortByPopularity() {
    setContacts([...contacts].sort((a,b) => b.popularity - a.popularity))
  }

  function deleteContact(contactId) {
    const index = contacts.findIndex((contact) => contact.id === contactId )
    let contactsCopy = [...contacts]
    contactsCopy.splice(index, 1)
    setContacts(contactsCopy)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="button-list">
          <button onClick={addContact}>Add random contact</button>
          <button onClick={sortByName}>Sort by name</button>
          <button onClick={sortByPopularity}>Sort by popularity</button>
        </div>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Name</td>
                <td>Popularity</td>
                <td>Won an Oscar</td>
                <td>Won an Emmy</td>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  {console.log(contact)}
                  <td><img className="contact-img" src={contact.pictureUrl} alt="contact" /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar && "🏆"}</td>
                  <td>{contact.wonEmmy && "🏆"}</td>
                  <td><button onClick={() => {deleteContact(contact.id)}}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
</div>
);
}

export default App;
