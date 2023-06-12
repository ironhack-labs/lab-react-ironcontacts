import React from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = React.useState(contacts.slice(0,5));
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  );
}

export default App;
