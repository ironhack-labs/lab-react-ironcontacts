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
    const contactCelebritiesCopy = [...contactCelebrities, newContact];
    
    // contactCelebritiesCopy.push(newContact);
    setContactCelebrities(contactCelebritiesCopy);
  }

  const sortByName = () => {
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.sort((a,b) => a.name.localeCompare(b.name));
    setContactCelebrities(contactCelebritiesCopy);
  }

  const sortByPopularity = () => {
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.sort((a,b) => b.popularity - a.popularity);
    setContactCelebrities(contactCelebritiesCopy);
  }

  const deleteHandler = (event, idToDelete) => {
    console.log(idToDelete);
    setContactCelebrities(contactCelebrities.filter(({ id }) => id !== idToDelete));
  };

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
    <button onClick={sortByName}>Sort by Name</button>
      <table>
      <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>

        {contactCelebrities.map((contact) => {
         return (
          <tr key={contact.id}>
          <td><img src={contact.pictureUrl} style={{width: "50px"}} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? <td>🏆</td> : null}
          {contact.wonEmmy ? <td>🏆</td> : null}
          <td>
          <button onClick={(event) => {
         deleteHandler(event, contact.id);
          }}>Delete</button>
       </td>
          </tr>
         )
        })}
          </tbody>
      </table>
    </div>
  );
}

export default App;
