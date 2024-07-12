import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import Row from "./components/Row";

function App() {
  const [newContacts, setNewContacts] = useState(contacts.slice(0, 5));
  const [isSorted, setIsSorted] = useState(false);

  const addRandom = () => {
    let added = false;
    if (newContacts.length === contacts.length) {
      alert("All data added");
    } else {
      while (!added) {
        const randomNumber = Math.floor(Math.random() * contacts.length);
        const randomContact = contacts[randomNumber];
        if (!newContacts.includes(randomContact)) {
          setNewContacts([...newContacts, randomContact]);
          added = true;
        }
      }
    }
  };

  const sortByName = () => {
    if (isSorted === false) {
      const sortedContacts = [...newContacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setNewContacts(sortedContacts);
      setIsSorted(true);
    } else {
      const sortedContacts = [...newContacts].reverse();
      setNewContacts(sortedContacts);
      setIsSorted(false);
    }
  };

  const sortByPopularity = () => {
    const sortedContacts = [...newContacts].sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setNewContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const newArray = newContacts.filter((contact) => {
      return contact.id !== id;
    });
    setNewContacts(newArray);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {newContacts.map((contact) => {
            return (
              <Row
                contact={contact}
                key={contact.id}
                deleteContact={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={() => addRandom()}>Add Random Actor</button>
      <button onClick={() => sortByName()}>A - Z / Z - A</button>
      <button onClick={() => sortByPopularity()}>- Popularity +</button>
    </div>
  );
}

export default App;
