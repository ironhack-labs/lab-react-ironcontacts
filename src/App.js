import { useEffect, useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json";

function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(contactsJson.slice(0, 5))
  }, [])

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th scope="row">
                  <img src={contact.pictureUrl} alt="picture" />
                </th>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
