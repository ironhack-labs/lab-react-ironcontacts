import React from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  // to get only the first 5 contacts from contacts as initial state
  const initialContacts = contactsData.slice(0, 5);
  //setting up the contact state
  const [contacts, setContacts] = React.useState(initialContacts);
  const addRandomActor = () => {
    // random actor suchen
    const randomActor =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    // durch set Contacts dem state hinzufügen
    setContacts([randomActor, ...contacts]);
  };
  const sortNames = () => {
    // const sortedContacts = contacts.sort((a,b) => a.name-b.name);
    const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts([...sortedContacts]);
  };

  return (
    <div className="App">
      <button onClick={addRandomActor}>Add Random Actor</button>
      <button onClick={sortNames}>Sort by Names</button>
      {/* <button onClick={sortPop}>Sort by Popularity</button> */}
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
