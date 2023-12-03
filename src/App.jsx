import { useState } from "react";
import "./App.css";
import contactData from "./contacts.json";

function App() {
  const [contacts, setContact] = useState(contactData.slice(0, 5))
  // item 3
  const [rest, setRest] = useState(contactData.slice(5));
  const addRandomContact = () => {
    if (rest.length == 0) {
      return
    }

    let randomIndex = Math.floor(Math.random() * rest.length);
    const randomElement = rest[randomIndex];
    setContact((prevContacts) => {
      return [...prevContacts, randomElement];
    });

    if (rest.length)
      setRest((prevState) =>
        prevState.filter((e) => e.id !== randomElement.id))
  };
  // item 4
  const sortByName = () => {
    setContact((prevContacts) => {
      return [...prevContacts.sort((a, b) => a.name.localeCompare(b.name))]
    });
  }

  const sortByPopularity = () => {
    setContact((prevContacts) => {
      return [...prevContacts.sort((a, b) => b.popularity - a.popularity)];
    });
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    })
    setContact(filteredContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populartiy</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {

            return (<tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ height: "100px" }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🌟</td> : <td></td>}
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
