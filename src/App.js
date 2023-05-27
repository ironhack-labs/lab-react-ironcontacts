import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

function App() {
  const contactsArray =  contacts.slice(0,5);

  const [contactCelebrities, setContactCelebrities] = useState(contactsArray);

  const addContact = () => {
    const newContactIndex = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[newContactIndex];
    const contactsArrayCopy = [...contactCelebrities];

    contactsArrayCopy.push(newContact);
    setContactCelebrities(contactsArrayCopy);

    console.log(newContact);
    console.log(contactsArrayCopy);
  }

 /*
 const addName = () => {
    if (possibleElements.length === 0) {
      console.log("No more Elements to add");
      return;
    }
    const newNameIndex = Math.floor(Math.random() * possibleElements.length);
    const newName = possibleElements[newNameIndex];

    const possibleElementsCopy = [...possibleElements];
    possibleElementsCopy.splice(newNameIndex, 1);
    setPossibleElements(possibleElementsCopy);

    setElements([...elements, { name: newName, id: nanoid() }]);
  };
 */

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addContact}>Add Random Contact</button>
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
