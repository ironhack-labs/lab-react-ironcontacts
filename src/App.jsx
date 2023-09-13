import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';


function App() {

  //state variable: const [currentState, setMyState] = useState(initialValue);
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const addRandom = () => {
    const leftOverContacts = contacts.slice(5);
    const randomIndex = Math.floor(Math.random() * leftOverContacts.length);
    const randomContact = leftOverContacts[randomIndex];

    setContactList((initialContacts) => [...initialContacts, randomContact]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <br />
      <button onClick={addRandom}>+ Add random contact</button>
      <br />

      <br />

      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>

        <br />

        <tbody>
          {contactList.map((contact) => (
            <tr>
              <td> <img src={contact.pictureUrl} width="120" /> </td>
              <td> {contact.name} </td>
              <td> {contact.popularity.toFixed(2)} </td>
              <td> {contact.wonOscar ? "🏆" : null}</td>
              <td> {contact.wonEmmy ? "🏆" : null}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;
