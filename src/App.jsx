import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import contact from "./contacts.json";

// no components recommendation

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));
  console.log(contacts);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan="2">Ironcontacts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts.map((contact)=> {
            return(<tr>
            <td>
              <img
                src={contact.pictureUrl}
                alt="Actor-image"
                height={100}
              ></img>
            </td>
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
