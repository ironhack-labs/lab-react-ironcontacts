import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";



function App(props) {
  const initialContacts=contactsJSON.slice (0,5)
  const [contacts, setContacts] = useState(initialContacts);
  


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        </thead>
        <tbody>
        {contacts.map((contact, index) => (

          <tr key={index}>
          <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
          <td>{contact.name}</td>
          <td> {parseFloat(contact.popularity.toFixed (2))}</td>
          </tr>
        ))}
          
        </tbody>
      </table>

    </div>
  );
}

export default App;
