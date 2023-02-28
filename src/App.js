import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const firstContacts = contacts.slice(0, 5);
console.log(firstContacts);

function App() {
  const [currentContacts, setCurrentContact] = useState(firstContacts);

  const addContact = () => {
    const randomNumber = Math.random() * contacts.length;
    const randomPosition = Math.floor(randomNumber);
    const randomContact = contacts[randomPosition];
    console.log(randomContact);
    const contactsClone = [...currentContacts];
    contactsClone.push(randomContact);
    setCurrentContact(contactsClone);
  };

  return (
    <div className="App">
      <div id="card-container">
        {currentContacts.map((eachContact) => {
          return (
            <div className="card" key={eachContact.id}>
              <h3>{eachContact.name}</h3>
              <img
                src={eachContact.pictureUrl}
                alt={eachContact.name}
                height={"350px"}
              />
              <br />
              <p>Popularity: {eachContact.popularity}</p>
              {eachContact.wonEmmy === false ? null : <p>Won an Emmy! 🏆</p>}
              {eachContact.wonOscar === false ? null : <p>Won an Oscar! 🏆</p>}
            </div>
          );
        })}
      </div>
      <button onClick={addContact}>Add Random Contact</button>
    </div>
  );
}

export default App;
