import "./App.css";
import { useState } from "react";
import contactsD from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsD.slice(0, 5));

  function getRandom() {
    const contactFive = contactsD.slice(5).filter(el => contacts.includes(el) === false)
    let newContact = contactFive[Math.floor(Math.random() * contactFive.length)];
    setContacts([newContact, ...contacts]);
  }
  function sortPop() {
    let x = [...contacts].sort((a, b) => b.popularity - a.popularity);
    return setContacts(x);
  }
  function sortName() {
    let y = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    return setContacts(y);
  }
  function removeOne(id) {
    const z = contacts.filter(contact => {
      return contact.id !== id;
    })
    return setContacts(z);
  }
  return <div className="App">
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Delete</th>
      </tr>
      {contacts.map((contact) => (
        <tr key={contact.id}>
          <td> <img src={contact.pictureUrl} /></td>
          <td><p>{contact.name}</p></td>
          <td><p>{Math.round(contact.popularity * 100) / 100}</p></td>
          <td>{contact.wonOscar ? <p>🏆</p> : <p>😩</p>}</td>
          <td> {contact.wonEmmy ? <p>🏆</p> : <p>😩</p>}</td>
          <td> <button onClick={() => removeOne(contact.id)}>Delete</button></td>
        </tr>
      ))}
    </table>
    <div id="buttons">
      <button onClick={getRandom} > Add Contact</button>
      <button onClick={sortPop} > Sort</button>
      <button onClick={sortName} > Sort by Name</button>
    </div>
  </div>;
}

export default App;

