import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  //console.log(contactList);
  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        {contactList.map((contact) => {
          return (
            <table key={contact.id} {...contact}>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="photo" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default App;
