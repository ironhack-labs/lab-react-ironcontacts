import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import { nanoid } from "nanoid";

function App() {
  const contactsArray =  contacts.slice(0,5);

  const [contactCelebrities, setContactCelebrities] = useState(contactsArray);

  const addContact = () => {
    const newContactIndex = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[newContactIndex];
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.push(newContact);
    setContactCelebrities(contactCelebritiesCopy);
  }

  const sortByName = () => {
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.sort((a,b) => a.name.localeCompare(b.name));
    console.log(contactCelebritiesCopy);
    setContactCelebrities(contactCelebritiesCopy);
  }

  const sortByPopularity = () => {
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.sort((a,b) => b.popularity - a.popularity);
    console.log(contactCelebritiesCopy);
    setContactCelebrities(contactCelebritiesCopy);
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
    <button onClick={sortByName}>Sort by Name</button>
      <table>
      <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>

        {contactCelebrities.map((contact) => {
         return (
          <tr>
          <td><img src={contact.pictureUrl} style={{width: "50px"}} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? <span>🏆</span> : null}
          {contact.wonEmmy ? <span>🏆</span> : null}
          </tr>
         )
        })}
          </tbody>
      </table>
    </div>
  );
}

export default App;
