import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const contactFirst = contactsData.slice(5, 10);
  console.log(contactFirst);

  const [contactsRandom, setContacts] = useState(contactFirst);

  const addRandomContact = () => {
    let pickRandomContactId = Math.floor(Math.random() * contactsData.length);
    let contactToDisplay = contactsData.splice(pickRandomContactId, 1)[0];
    if (!contactsRandom.includes(contactToDisplay)) {
      setContacts([...contactsRandom, contactToDisplay]);
    } else {
      addRandomContact();
    }
  };
  const sortByName = () => {
    const contactsCopy = JSON.parse(JSON.stringify(contactsRandom));
    contactsCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name > a.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(contactsCopy);
  };

  const sortByPopularity = () => {
    const contactsCopy = JSON.parse(JSON.stringify(contactsRandom));
    contactsCopy.sort((a, b) => {
      if (b.popularity < a.popularity) {
        return -1;
      } else if (a.popularity > b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(contactsCopy);
  };

  const deleteContact = (id) => {
    const remainderContacts = contactsRandom.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(remainderContacts);
  };

  return (
    <div className="App">
     <div className="div-buttons">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
</div>
<div className="div-table">
      <table className="tbl-contacts">
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contactsRandom.map((contact) => {
            return (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    className="img-contact"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{(contact.popularity).toFixed(2)}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}

                {contact.wonEmmy ? <td>🌟</td> : <td></td>}
                <td>
                  <button className="btn-delete" onClick={() => deleteContact(contact.id)}>
                    ❌
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
