import logo from "./logo.svg";
import "./App.css";
import contactsFromJson from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsFromJson.slice(0, 5));
  let sorted;
  const sortContacts = (sortType) => {
    if (sortType === "popularity") {
      contacts.sort((a, b) => b.popularity - a.popularity);
      sorted = "popularity";
      setContacts([...contacts]);
    }
    if (sortType === "name") {
      contacts.sort((a, b) => a.name.localeCompare(b.name));
      sorted = "name";
      setContacts([...contacts]);
    }
  };
  const addRandomContact = () => {
    contacts.push(
      contactsFromJson[Math.floor(Math.random() * contactsFromJson.length)]
    );
    sorted ? sortContacts(sorted) : setContacts([...contacts]);
  };

  return (
    <div className="App text-center flex flex-col space-y-6 justify-center">
      <button onClick={() => sortContacts("popularity")}>
        Sort By Popularity
      </button>
      <button onClick={() => sortContacts("name")}>Sort By Name</button>
      <button onClick={addRandomContact}>Add Random</button>
      <table className="space-y-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.name}>
              <td>{contact.name}</td>
              <td>
                <img
                  className="w-10 h-10"
                  src={contact.pictureUrl}
                  alt={`Profile of ${contact.name}`}
                />
              </td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td>
                <button
                  onClick={() => {
                    contacts.splice(index, 1);
                    setContacts([...contacts]);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
