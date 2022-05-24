import "./App.css";
import { useState } from "react";
import ContactData from "./contacts.json";
function App() {
  const [contacts, setContacts] = useState(ContactData.slice(0, 5));

  const randomContacts = () => {
    let random = ContactData[Math.floor(Math.random() * ContactData.length)];
    console.log(random);
    setContacts([random, ...contacts]);
  };
  const sortPopularity = () => {
    let sort = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sort);
  };
  const sortNames = () => {
    let sort = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sort);
  };

  const deleteContact = (contactId) => {
    const filteredActor = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredActor);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => sortNames()}>Sort by name</button>
      <button onClick={() => sortPopularity()}>Sort by popularity</button>
      <button onClick={() => randomContacts()}>Add a random contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        <tbody>
          {contacts.map((el) => {
            return (
              <tr>
                <td>
                  <img src={el.pictureUrl} alt="" />
                </td>
                <td>
                  <p>{el.name}</p>
                </td>
                <td>
                  <p>{el.popularity}</p>
                </td>
                <td>
                  <p>
                    {el.wonOscar ? (
                      <img
                        src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                        alt="trophy image"
                      />
                    ) : (
                      true
                    )}
                  </p>
                </td>
                <td>
                  <p>
                    {el.wonEmmy ? (
                      <img
                        src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"
                        alt="trophy image"
                      />
                    ) : (
                      true
                    )}
                  </p>
                </td>
                <td>
                  <button onClick={() => deleteContact(el.id)}>Delete</button>
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
