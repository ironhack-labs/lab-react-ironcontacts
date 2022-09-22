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

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="tableContacts">
        <table className="contacts">
          <thead style={{ fontWeight: 500 }}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
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
