import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsData, setContacts] = useState(contacts.slice(0, 5));

  // function random() {
  const getRandom = (newContact) => {
    const newArray = [...contacts];
    const randomIndex = Math.floor(Math.random() * newArray.length);
    const randomContact = contacts[randomIndex];
    newArray.slice(0, 5);
    // newArray.push(randomContact);
    // newArray.splice(0, 5, randomIndex);
    // newArray.slice(0, 6);
    console.log("NewArray", newArray);
    console.log("Random Contact", randomContact);
    // setContacts(newArray.splice(5, 0, randomIndex));
    setContacts([randomContact]);
  };

  // }

  // function getRandom() {
  //   const randomContact = contacts[Math.floor(Math.random()) * contacts.length];
  //   console.log(randomContact);
  //   return randomContact;

  //   setContacts(randomContact);
  // }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandom}>Add Random Contact</button>
      <div className="table">
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {contactsData.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
