import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = contacts.filter((element, idx) => idx < 5);
  const remainingContacts = contacts.filter((element, index) => index > 5);

  const [listContacts, setContact] = useState(fiveContacts);

  const addContact = () => {
    const randomIndex = Math.floor(
      Math.random() * (remainingContacts.length - fiveContacts.length + 1) +
        fiveContacts.length
    );
    const randomContact = remainingContacts[randomIndex];
    setContact((prevArr) => {
      const newContactList = [...prevArr, randomContact];
      console.log(newContactList);
      return newContactList;
    });
    // return newContactList;
  };

  const sortPopularity = () => {
    const sortedPop = listContacts.sort((a, b) => b.popularity - a.popularity);
    return sortedPop;
  };

  const sortName = () => {
    const sortedName = listContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedName;
  };

  const deleteContact = (contactId) => {
    setContact((prevContacts) => {
      const newList = prevContacts.filter((element) => {
        return element.id !== contactId;
      });
      return newList;
    });
  };

  console.log("this is", listContacts);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => addContact()}>Add new</button>
      <button onClick={() => sortPopularity()}>Sort by popularity</button>
      <button onClick={() => sortName()}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {listContacts.map((contact) => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆 </td> : <td></td>}
              {contact.wonEmmy ? <td>🏆 </td> : <td></td>}
              <td>
                <button
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
      </table>
    </div>
  );
}

export default App;
