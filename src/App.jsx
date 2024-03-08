import { useState } from "react";
import "./App.css";
import contactList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactList.slice(5)
  );

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContacts((prevContacts) => [randomContact, ...prevContacts]);
      /*setRemainingContacts((prevRemainingContacts) =>
      prevRemainingContacts.filter((contact, index) => index !== randomIndex))*/
      setRemainingContacts((prevRemainingContacts) => {
        const updatedRemainingContacts = [...prevRemainingContacts];
        updatedRemainingContacts.splice(randomIndex, 1);
        return updatedRemainingContacts;
      });
      console.log(remainingContacts);
    }
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  };

  const deleteRow = (id) => {
    const newArray = [...contacts];
    newArray.forEach((contact) => {
      if (contact.id == id) {
        const index = newArray.indexOf(contact);
        newArray.splice(index, 1);
      }
    });
    setContacts(newArray);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px", height: "auto" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
              <td>{contact.wonEmmy ? <p>🌟</p> : ""}</td>
              <td>
                <button onClick={() => deleteRow(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
