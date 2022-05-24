import React, { useState } from "react";
import "./App.css";
import contactData from "./contacts.json";
//import CelebrityList from "./components/CelebrityList";

function App() {
  const [contacts, setContacts] = useState(contactData.slice(0, 5));

  const randomContacts = () => {
    const random = contactData[Math.floor(Math.random() * contactData.length)];
    setContacts([random, ...contacts]);
  };

  // const sortName = () => {
  //   let name = [
  //     ...contacts.sort((a, b) => {
  //       if (a.name < b.name) {
  //         return -1;
  //       }
  //       if (a.name > b.name) {
  //         return 1;
  //       }
  //       return 0;
  //     }),
  //   ];
  //   setContacts(name);
  // };

  const sortName = () => {
    contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContacts([...contacts]);
  };

  const sortPopularity = () => {
    contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts([...contacts]);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="button1">
        <button className="button2" onClick={randomContacts}>
          Add Random Contact
        </button>
        <button className="button2" onClick={() => sortName()}>
          Sort by Name
        </button>
        <button className="button2" onClick={() => sortPopularity()}>
          Sort by Popularity
        </button>
      </div>
      <div className="table1">
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
              <tr>
                <td>
                  <img width="100" src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    className="button3"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              //<div key={movie._id} className="MovieCard">
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
