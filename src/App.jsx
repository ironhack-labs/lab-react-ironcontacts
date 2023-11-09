import { useState } from "react";
import "./App.css";
import contactjson from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactjson.slice(0, 5));

  function randomContact() {
    const newArray = contactjson.filter((contact) => {
      return (
        contacts.findIndex((c) => {
          return contact.id === c.id;
        }) == -1
      );
    });
    const newContact = newArray[Math.floor(Math.random() * newArray.length)];
    setContacts([...contacts, newContact]);
  }

  function alphbetContact() {
    const alphabet = [...contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(alphabet);
  }

  function popularityContact() {
    const popularity = [...contacts].sort((a1, b1) => {
      return b1.popularity - a1.popularity;
    });
    setContacts(popularity);
  }

  function deleteContact (suppId) {
    const supp = contacts.filter((deleteContact)=>{
      return suppId !== deleteContact.id
    } )
    setContacts(supp)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={alphbetContact}>Sort by Name</button>
      <button onClick={popularityContact}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th> Won an Oscar</th>
            <th> Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key = {index}>
              <td>
                <img src={contact.pictureUrl} width="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <span> 🏆 </span> : ""}</td>
              <td>{contact.wonEmmy ? <span> 🌟 </span> : ""}</td>
              <td><button onClick={()=> deleteContact(contacts.id)}> Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
