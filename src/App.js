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
    if (
      currentContacts.findIndex(
        (currentContact) => currentContact.id === randomContact.id
      ) === -1
    ) {
      const contactsClone = [...currentContacts];
      contactsClone.push(randomContact);
      setCurrentContact(contactsClone);
    }
  };

  const sortByName = () => {
    const contactsClone = [...currentContacts];
    contactsClone.sort((elem2, elem1) => {
      if (elem2.name > elem1.name) {
        return 1;
      } else if (elem2.name < elem1.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setCurrentContact(contactsClone);
  };

  const sortByPopularity = () => {
    const contactsClone = [...currentContacts];

    contactsClone.sort((elem1, elem2) => {
      if (elem2.popularity > elem1.popularity) {
        return 1;
      } else if (elem2.popularity < elem1.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setCurrentContact(contactsClone);
  };

  return (
    <div className="App">
      <div id="btn-container">
        <button onClick={addContact}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
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
    </div>
  );
}

export default App;
