import { useState } from "react";
import "./App.css";
import rawContacts from "./contacts.json";

function App() {
  const slicedContacts = rawContacts.slice(0, 5);

  const [contacts, setContacts] = useState(slicedContacts);

  const randomContactArray = rawContacts.slice(5);

  const randomContact = randomContactArray[Math.floor(Math.random() * 47)];

  const fullRandomContact = rawContacts[Math.floor(Math.random() * 52)];

  function handleDelete(id) {
    console.log(id);
    const arrayWithoutCard = contacts.filter((contact) => contact.id !== id);

    setContacts(arrayWithoutCard);
  }

  function handleClick() {
    const contactExists = contacts.some(
      (contact) => contact.id === randomContact.id
    );
    if (!contactExists) {
      setContacts((prevContacts) => [...prevContacts, randomContact]);
    }
  }

  function sortByName() {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  }

  function sortByPop() {
    const sortedPopularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedPopularity);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table className="Card">
        <thead>
          <tr>
            <th className="cardHeader">Picture</th>
            <th className="cardHeader">Name</th>
            <th className="cardHeader">Popularity</th>
            <th className="cardHeader">Won an Oscar</th>
            <th className="cardHeader">Won an Emmy</th>
            <th className="cardHeader">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(1)}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🌟" : null}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClick}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPop}>Sort by Popularity</button>
    </div>
  );
}

export default App;
