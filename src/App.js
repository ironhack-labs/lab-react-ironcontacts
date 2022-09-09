import { useState } from "react";
import "./App.css";
import contactsGiven from "./contacts.json";

function App() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(contactsGiven[i]);
  }

  const [contacts, setContacts] = useState(array); //recupere une varibale du dom qui va changer, on peut le re render.

  const randomlyAddContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsGiven.length);
    let randomContact = contactsGiven[randomIndex];

    for (let contact of contacts) {
      if (contact.id === randomContact.id) {
        return randomlyAddContact();
      }
    }
    const newContacts = [randomContact, ...contacts];
    setContacts(newContacts);
  };

  function sortByName() {
    let sortedList = [...contacts].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(sortedList);
  }

  function sortByPopularity() {
    let sortedList = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedList);
  }

  function deleteContact(id) {
    const del = contacts.filter((e) => {
      return e.id !== id;
    });
    setContacts(del);
  }

  return (
    <div className="App">
      <h1>IronContact</h1>
      <button className="button" onClick={() => randomlyAddContact()}>
        Add Random Contact
      </button>
      <button className="button" onClick={() => sortByName("name")}>
        Sort by name
      </button>
      <button className="button" onClick={() => sortByPopularity("popularity")}>
        Sort by popularity
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td className="contact-picture">
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td className="contact-name">{contact.name}</td>
                <td className="contact-popularity">
                  {contact.popularity.toFixed(2)}
                </td>
                <td className="contact-oscar">
                  {contact.wonOscar ? "🏆" : ""}
                </td>
                <td classname="contact-emmy">{contact.wonEmmy ? "⭐" : ""}</td>
                <td>
                  {" "}
                  <button
                    className="button"
                    onClick={() => deleteContact(contact.id)}
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
