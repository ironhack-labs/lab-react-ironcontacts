import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const initialList = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(initialList);

  function addRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (!contactList.includes(randomContact)) {
      setContactList([...contactList, randomContact]);
    } else {
      addRandomContact();
    }
  }

  function sortByPopularity() {
    const copy = [...contactList];
    const sortedListByPop = copy.sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedListByPop);
  }

  function sortByName() {
    const copy = [...contactList];
    const sortedListByName = copy.sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedListByName);
  }

  function deleteContact(contactId) {
    const copy = [...contactList];
    const updatedContactList = copy.filter((contact) => {
      return contact.id !== contactId;
    });

    setContactList(updatedContactList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
            <th>
              <h2>Won an Oscar</h2>
            </th>
            <th>
              <h2>Won an Emmy</h2>
            </th>
            <th>
              <h2>Actions</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    width="150px"
                    src={contact.pictureUrl}
                    alt="contact_img"
                  ></img>
                </td>
                <td>
                  <h3>{contact.name}</h3>
                </td>
                <td>
                  <h3>{contact.popularity}</h3>
                </td>
                <td>
                  <h3>{contact.wonOscar && "🏆"}</h3>
                </td>
                <td>
                  <h3>{contact.wonEmmy && "🏆"}</h3>
                </td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
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
