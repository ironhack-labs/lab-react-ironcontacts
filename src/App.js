import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./contacts.json";
const trophy = "🏆";

function App() {
  const firstFiveContacts = data.slice(0, 5);
  const remainingContacts = data.slice(5);

  const [contacts, setContacts] = useState(firstFiveContacts);

  const handleAddRandomContact = () => {
    const randomIndex = Math.ceil(Math.random() * remainingContacts.length - 1);

    if (contacts.includes(remainingContacts[randomIndex])) {
      return;
    } else {
      setContacts([...contacts, remainingContacts[randomIndex]]);
    }
  };

  const handleSortByPopularity = () => {
    const contactsSortedByPopularity = [...contacts].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    setContacts(contactsSortedByPopularity);
  };

  const handleSortByName = () => {
    const contactsSortedByName = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(contactsSortedByName);
  };

  const handleDeleteContact = (contactId) => {
    const filteredContactsArray = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContactsArray);
  };

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="contactImage" />
              </td>
              <tbody></tbody>
              <td> {contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && trophy}</td>
              <td>{contact.wonEmmy && trophy}</td>
              <button onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
