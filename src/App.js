import { useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState([...contactsFromJson.slice(0, 5)]);
  const [duplicated, setDuplicated] = useState(false)
  function addRandomContact() {
    const randomNumberFromJson = Math.floor(
      Math.random() * contactsFromJson.length - 1
    );
    const newContact = contactsFromJson[randomNumberFromJson];

    if(!contacts.includes(newContact)){
      setContacts((prevValue) => [...prevValue, newContact])
      setDuplicated(false)
    }
    else{
      setDuplicated(true)
    }
  }

  function sort(arg) {
    if (arg === "name") {
      setContacts((prevValue) => [
        ...prevValue.sort((a, b) => (a.name > b.name ? 1 : -1)),
      ]);
    } else if (arg === "popularity") {
      setContacts((prevValue) => [
        ...prevValue.sort((a, b) => (a.popularity > b.popularity ? -1 : 1)),
      ]);
    }
  }
  function removeContact(contactId) {
    const newContacts = contacts.filter((contactObj) => {
      if (contactObj.id !== contactId) {
        return contactObj;
      }
    });
    setContacts(newContacts);
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={() => sort("popularity")}>Sort by popularity</button>
      <button onClick={() => sort("name")}>Sort by name</button>
      {duplicated && <p>Contact duplicated</p>}
      <p>There are {contacts.length} contacts</p>
      <table cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>
              <h2>
                <b>Picture</b>
              </h2>
            </th>
            <th>
              <h2>
                <b>Name</b>
              </h2>
            </th>
            <th>
              <h2>
                <b>Popularity</b>
              </h2>
            </th>
            <th>
              <h2>
                <b>Won an Oscar</b>
              </h2>
            </th>
            <th>
              <h2>
                <b>Won an Emmy</b>
              </h2>
            </th>
            <th>
              <h2>
                <b>Actions</b>
              </h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactsObj) => {
            return (
              <tr className="card">
                <th>
                  <img
                    src={(contactsObj.pictureUrl) ? contactsObj.pictureUrl : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                    alt={contactsObj.name}
                    width="100px"
                  />
                </th>
                <th>{contactsObj.name}</th>
                <th>{contactsObj.popularity}</th>
                <th>{contactsObj.wonOscar && "🏆"}</th>
                <th>{contactsObj.wonEmmy && "🏆"}</th>
                <th>
                  <button onClick={() => removeContact(contactsObj.id)}>
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
