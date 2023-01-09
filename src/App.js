import "./App.css";
import { useState } from "react";
import allContacts from "./contacts.json";

function App() {
  //Listed Contacts
  const listedContacts = allContacts.slice(0, 5);

  //State
  const [contacts, setContacts] = useState(listedContacts);

  //Unlisted Contacts
  const unListedContacts = allContacts.slice(5, allContacts.length);

  const addRandomContact = () => {
    //Random contact from unlisted contacts
    let randomContactIndex = Math.floor(
      Math.random() * unListedContacts.length
    );
    // New Contact
    let newContact = unListedContacts.splice(randomContactIndex, 1);

    setContacts([...contacts, newContact[0]]);
  };

  //sort by alphabetically
  const sortAlphabetically = () => {
    const sortedContacts = [
      ...contacts.sort((a, b) => {
        const contactA = a.name.toUpperCase();
        const contactB = b.name.toUpperCase();
        if (contactA < contactB) {
          return -1;
        }
        if (contactA > contactB) {
          return 1;
        }
        return 0;
      }),
    ];
    setContacts(sortedContacts);
  };

  //sort by popularity
  const sortPopularity = () => {
    const sortedContacts = [
      ...contacts.sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    ];
    setContacts(sortedContacts);
  };

  //remove contact
  const removeContact = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortAlphabetically}>Sort by name</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width={50}></img>
                </td>
                <td>{contact.name}</td>
                <td>{(Math.ceil(contact.popularity) / 2).toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    onClick={() => {
                      removeContact(contact.id);
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
