import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(0, 5));

    const addRandomContact = () => {
  
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContacts((prevContacts) => [...prevContacts, randomContact]);


    };


  return (
<div className="App">
    <h1>IRON CONTACTS</h1>

    <div className="button-container">
    <button onClick={ () => {addRandomContact(remainingContacts)}}>Add random Celebrity Contact</button>
    <button onClick={ () => {}}>Sort by Name</button>
    <button onClick={ () => {}}>Sort by Popularity</button>
    </div>
  
    <table>
      <thead>
      <tr>
        <th>PICTURE</th>
        <th>NAME</th>
        <th>POPULARITY</th>
        <th>WON OSCAR</th>
        <th>WON EMMY</th>
      </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>

              {contact.wonOscar === true && <td>🏆</td>}
              {contact.wonEmmy === true && <td>🏆</td>}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  );
}
export default App;
