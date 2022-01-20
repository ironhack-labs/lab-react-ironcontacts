import React from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  // to get only the first 5 contacts from contacts as initial state
  const initialContacts = contactsData.slice(0, 5).map((contact) => (
    <tr key={contact.id}>
      <td>
        <img
          style={{ height: "150px" }}
          src={contact.pictureUrl}
          alt={contact.name}
        />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
    </tr>
  ));
  //setting up the contact state
  const [contacts, setContacts] = React.useState(initialContacts);
  const addRandomActor = () => {
    // random actor suchen
    const randomActor =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    const randomActorElement = (
      <tr key={randomActor.id}>
        <td>
          <img
            style={{ height: "150px" }}
            src={randomActor.pictureUrl}
            alt={randomActor.name}
          />
        </td>
        <td>{randomActor.name}</td>
        <td>{randomActor.popularity}</td>
      </tr>
    );
    // durch set Contacts dem state hinzufügen
    setContacts([randomActorElement, ...contacts]);
  };

  return (
    <div className="App">
      <button onClick={addRandomActor}>Add Random Actor</button>
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{contacts}</tbody>
      </table>
    </div>
  );
}

export default App;
