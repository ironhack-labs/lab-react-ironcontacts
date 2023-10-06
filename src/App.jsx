import React, {useState} from "react";
import "./App.css";
import contacts from "./contacts.json";
function App() {
  const [contacts, setContacts]= useState (contacts.slice(0,5));
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img className="contact-image" src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆": ""} </td>
              <td>{contact.wonEmmy ? "🏆": "" } </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
