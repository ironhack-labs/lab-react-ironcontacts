import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  // const [contactsState, setContactsState] = useState(contacts.slice(0, 5));
  const [contactsState, setContactsState] = useState(contacts);
  console.log("contactsState: ", contactsState);

  return (
    <div className="App">
      <table id="contactList">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsState.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
