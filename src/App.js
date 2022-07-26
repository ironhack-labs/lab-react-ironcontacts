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

  const [contactsAlphabetical, setAlphabetically]= useState(contactsArr)
  setAlphabetically ( (prevValue) => {
    const copy = [...prevValue]
    copy.sort((a, b) => a.name.localeCompare(b.name))
    return copy;
});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Iron Contacts</h1>
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={setAlphabetically}>Sort by Name</button>
        <button>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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