// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const allContacts = [...contactsData];
  // console.log("Contacts:", allContacts);

  const fiveContacts = allContacts.slice(0, 5);
  // console.log("Contacts:", fiveContacts);

  const [contacts, setcontact] = useState(fiveContacts);

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (allContacts.length - 1));
    // console.log("Randon Index:", randomIndex);

    const newContact = allContacts[randomIndex];
    // console.log("New Contact:", newContact);

    const contactIsIntheList = contacts.find(
      (element) => element.id === newContact.id
    );

    if (!contactIsIntheList) {
      const updateContacts = [...contacts, newContact];
      // console.log(updateContacts);
      setcontact(updateContacts);
    }
  };

  // Sort by Popularity

  const sortByPop = () => {
    const sortedPops = contacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    setcontact([...sortedPops]);
  };

  // Sort By Name
  const sortByName = () => {
    const sortedNames = contacts.sort((a, b) => (a.name < b.name ? -1 : 1));
    setcontact([...sortedNames]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <div className="tableContacts">
        <table className="contacts">
          <thead style={{ fontWeight: 500 }}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id} className="contact">
                  <th>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      style={{ width: 70 }}
                    />
                  </th>
                  <th style={{ fontWeight: 200 }}> {contact.name}</th>
                  <th style={{ fontWeight: 200 }}>
                    {contact.popularity.toFixed(2)}{" "}
                  </th>
                  <th>{contact.wonOscar && "🏆"} </th>
                  <th>{contact.wonEmmy && "🏆"} </th>
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
