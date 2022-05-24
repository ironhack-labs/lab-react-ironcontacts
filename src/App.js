import "./App.css";
import contact from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contactList, setContactList] = useState(contact.slice(0, 5)); // usar o usestate para controlar a dinamica - hook

  const newContacts = contact.slice(6);

  const randomContact = () => {
    const newContact = contact[Math.floor(Math.random() * newContacts.length)];
    setContactList([newContact, ...contactList]);
  };

  const sortButton = () => {
    setContactList([
      ...contactList.sort((x, y) => x.name.localeCompare(y.name)),
    ]);
  };
  const sortPop = () => {
    setContactList([
      ...contactList.sort((x, y) => y.popularity - x.popularity),
    ]);
  };

  const deleteContact = (elementId) => {
    const filteredContact = contactList.filter((element) => {
      return element.id !== elementId;
    });

    setContactList(filteredContact);
  };

  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={() => randomContact()}>Add Random Contact</button>
      <button onClick={() => sortButton()}>Sort by name</button>
      <button onClick={() => sortPop()}>Sort by popularity</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </thead>
        <tbody>
          {contactList.map((element) => {
            return (
              <tr>
                <td>
                  <img src={element.pictureUrl} alt="" width={100}></img>
                </td>
                <td>{element.name}</td>
                <td>{element.popularity.toFixed(2)}</td>
                <td>{element.wonOscar ? <p>🏆</p> : <p>X</p>}</td>
                <td>{element.wonEmmy ? <p>🌟</p> : <p>X</p>}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteContact(element.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default App;
