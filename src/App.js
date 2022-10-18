import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {
  let firstFiveContacts = contactsArray.slice(0, 5);
  let remainingContacts = contactsArray.slice(5);

  const [contacts, setContacts] = useState(firstFiveContacts);


  const addRandomContact = () => {
    const contactsCopy = [...contacts];
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    contactsCopy.push(randomContact); //push random c to new array
    remainingContacts.splice(randomIndex, 1); //remove same contact from remaining contacts
    setContacts(contactsCopy);
  };


  return (<div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>
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
        {contacts.map(contact => {
          let imgContent;
          contact.pictureUrl ? imgContent = <img src={contact.pictureUrl} alt={contact.name} className="contact-picture" /> : imgContent = 'Image not available'
          
          return (
            <tr key={contact.id}>
              <td>{imgContent}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '⭐️' : null}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  )
}

export default App;
