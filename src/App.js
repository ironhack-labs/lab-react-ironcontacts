import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

//Corta array e pega 5 contatos
const InitialContacts = contactsData.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(InitialContacts);

  //Deleta contato
  const deleteContact = (contactId) => {
    //Recebe id do botão delete e retorna somente os items que são diferentes do id
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  //Add random contact

  const addContact = () => {
    let itemIdx = Math.floor(Math.random() * contactsData.length);
    let addedContact = contactsData[itemIdx];

    for (let contact of contacts) {
      if (contact.id === addedContact.id) {
        console.log('Item já está na lista!')
        return addContact();
      }
    }
    const newContacts = [addedContact, ...contacts];
    setContacts(newContacts);
  };

  //Sort by name
  const sortByName = () => {
    const sortedByName = [...contacts].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setContacts(sortedByName);
  };
  //Sort by popularity
  const sortByPopularity = () => {
    const sortedByPopularity = [...contacts].sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1;
    });
    setContacts(sortedByPopularity);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-evenly",
          marginBottom: "40px",
        }}
      >
        <button className="btn-delete" onClick={() => addContact()}>Add Random Contact</button>
        <button className="btn-delete" onClick={() => sortByName()}>Sort by Name</button>
        <button className="btn-delete" onClick={() => sortByPopularity()}>Sort by Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td style={{ fontWeight: "500" }}>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
                <td>
                  <button
                    className="btn-delete"
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
