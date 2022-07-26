import { useState } from "react";
import "./App.css";
import array from "./contacts.json";

function App() {
  // let startNumber = 0;
  let maxNumber = 5;
  let initialArray = array.slice(0, maxNumber);
  let remainingArray = array.slice(maxNumber, array.length - 1);

  const [contact, setContacts] = useState(initialArray);

  const addContact = () => {
    if (contact.length === array.length) {
      return false;
    }
    setContacts(() => {
      const newContact =
        remainingArray[Math.floor(Math.random() * remainingArray.length)];
      const copyArr = [...contact];
      copyArr.push(newContact);
      return copyArr;
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const newList = prevContacts.filter((element) => {
        return contactId !== element.id;
      });
      return newList;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Iron contacts</h1>
        <button onClick={addContact}>Add random contact</button>
        <button>Sort by popularity</button>
        <button>Sort by name</button>
      </header>

      <div className="all-Table">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
          {contact.map((contact) => {
            return (
              <tr key={contact.id} className="contact">
                <td>
                  <img src={contact.pictureUrl} alt="pic profile" />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : ""}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.Id);
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
    </div>
  );
}

export default App;
