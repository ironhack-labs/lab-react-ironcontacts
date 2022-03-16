import "./App.css";
import { useState } from "react";
const contactSample = require("./contacts.json");

function App() {

  const [contacts, setContacts] = useState(contactSample.slice(0, 5));

  return (
    <>
      <div className="App">
        <h1>IronContacts</h1>
        <table class="center">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>
                      <img
                        src={contact.pictureUrl}
                        alt="contactPic"
                        id="celebPic"
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
