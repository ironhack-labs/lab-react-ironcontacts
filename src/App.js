import { useState } from "react";
import contactsData from "../src/contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const randomContacts = () => {
    let random = contactsData[Math.floor(Math.random() * contactsData.length)];

    setContacts([random, ...contacts]);
  };

  const byPopularity = () => {
    let popular = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(popular);
  };

  const byName = () => {
    let sort = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sort);
  };

  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContact);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={() => randomContacts()}>Add random contact</button>
      <button onClick={() => byPopularity()}>Sort by popularity</button>
      <button onClick={() => byName()}>Sort by name</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((element) => {
          return (
            <tr>
              <td>
                <img src={element.pictureUrl} alt="" />
              </td>
              <td>
                <p>{element.name}</p>
              </td>
              <td>
                <p>{element.popularity}</p>
              </td>
              <td>
                {element.wonOscar ? (
                  <img
                    src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                    alt=""
                  />
                ) : (
                  true
                )}
              </td>
              <td>
                {element.wonEmmy ? (
                  <img
                    src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                    alt=""
                  />
                ) : (
                  true
                )}
              </td>
              <td>
                <button onClick={() => deleteContact(element.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
