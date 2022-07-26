import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

function App() {

  const [contactsArr, setContact] = useState(contacts.slice(0, 5));
  const addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    setContact((prevContacts) => {
      const newContacts = [...prevContacts, randomContact]
      return newContacts
    })
  }

const setAlphabetically = ( () => {
    setContact( (prevContacts) => {
      const copy = [...prevContacts]
      copy.sort((a, b) => a.name.localeCompare(b.name))
      return copy;
    })
  })

  const setPopularity = ( () => {
    setContact( (prevContacts) => {
      const copy = [...prevContacts]
      copy.sort(function (a, b) {  return a.popularity - b.popularity;  })
      return copy.reverse();
    })
  })

const deleteContact = (contactId) => {
  setContact( (prevContacts) => {
      const newList = prevContacts.filter( (element) => {
          return element.id !== contactId;
      });
      return newList;
  });
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Iron Contacts</h1>
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={setAlphabetically}>Sort by Name</button>
        <button onClick={setPopularity}>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
          {contactsArr.map((contact) => {
            return (
              <div>
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar
                    ? <td>🏆</td>
                    : <td></td>}
                  <td><button onClick={() => {deleteContact(contact.id)}}>Delete</button></td>
                </tr>
              </div>
            )
          })}
        </table>
      </header>
      <div className="Main">
      </div>
    </div>
  );
}

export default App;