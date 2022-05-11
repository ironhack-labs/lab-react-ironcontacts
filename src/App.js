import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);

  const [contacts, setContacts] = useState(fiveContacts);

  const restContacts = contactsArr.filter(
    (contact) => !contacts.includes(contact)
  );

  const addRandomContact = () => {
    console.log(restContacts);
    setContacts(
      contacts.concat(restContacts[Math.floor(Math.random() * contacts.length)])
    );

    //setContacts((contactsArr) => {
    //  const newList = contactsArr.concat(
    //
    //  );
    //  console.log(newList);
    //  return newList;
    //});
  };

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
      </div>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        {fiveContacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>{<img src={contact.pictureUrl} alt=""></img>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{!contact.wonOscar ? "" : <span>🏆</span>}</td>
              <td>{!contact.wonEmmy ? "" : <span>🏆</span>}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
