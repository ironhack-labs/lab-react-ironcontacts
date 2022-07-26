import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json"


let fiveContacts = allContacts.slice(0,5)



function App() {
  
  const [contacts, setContacts] = useState(fiveContacts);
  // console.log(contacts)
  
  return <div className="App">

    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>

      {contacts.map( (contact) => {
        return (
          <tr>
              <td> <img src={contact.pictureUrl}/> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
          </tr>
        )
      }

      )}

    </table>

  </div>;
}
export default App;
