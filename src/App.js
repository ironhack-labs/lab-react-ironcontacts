// src/App.js
import "./App.css";
import { useState } from "react";

const contactsData = require("./contacts.json");

function App() {
  const contactSlice = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(contactSlice);

  const handleAddRandom = () => {
    const random =
      contactsData[Math.floor(Math.random() * contactsData.length) + 5];
    const updatedList = [...contacts, random];
    setContacts(updatedList);
  };
  const sortContactNames = () => {
    const sortedListByName = [...contacts];
    const sortedNameList = sortedListByName.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(sortedNameList);
  };
  const sorByPopularity = () => {
    const SortedListByPopularity = [...contacts];
    const SortedPopularityList = SortedListByPopularity.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(SortedPopularityList);
  };
  const handlerDeleteContact = (id) => {
    const newContactList = contacts.filter(
      (contactsData) => contactsData.id !== id
    );
    setContacts(newContactList);
  };
  return (
    <div className="App">
      <>
        <h1>IronHack Contacts</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>
                  Name <button onClick={sortContactNames}>Sort</button>
                </th>
                <th>
                  Popularity <button onClick={sorByPopularity}>Sort</button>
                </th>
                <th>Won an Oscar?</th>
                <th>Won an Emmy?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <>
                    <tr key={contact.id}>
                      <td>
                        <img
                          src={contact.pictureUrl}
                          alt={contact.name}
                          className="CelebImages"
                        />
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                      <td>{contact.wonOscar ? "🏆" : ""}</td>
                      <td>{contact.wonEmmy ? "🏆" : ""}</td>
                      <td>
                        <button
                          onClick={() => handlerDeleteContact(contact.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <button onClick={handleAddRandom}>Add Random Contact</button>
        </div>
      </>
    </div>
  );
}
export default App;
