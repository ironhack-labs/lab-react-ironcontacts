import "./App.css";
import { useState } from "react";
import contactsList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  const addRnd = () => {
    const rndIndex = Math.floor(Math.random() * contactsList.length);
    const rndContact = contactsList[rndIndex];
    setContacts([...new Set([...contacts, rndContact])]);
  };

  const sortName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  };

  const sortPopular = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        className="Btn"
        onClick={() => {
          addRnd();
        }}
      >
        Add Rnd Contact
      </button>
      <button
        className="Btn"
        onClick={() => {
          sortName();
        }}
      >
        Sort by Name
      </button>
      <button
        className="Btn"
        onClick={() => {
          sortPopular();
        }}
      >
        Sort by Popularity
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    className="Image"
                    src={contact.pictureUrl}
                    alt="img missing"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🌟</td> : <td></td>}
                <td>
                  <button
                    className="Btn"
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
