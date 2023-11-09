import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsList, setContactsList] = useState(contacts);

  const fiveContacts = contactsList.slice(0, 5);
  // console.log(fiveContacts);

  console.log(contactsList);

  const newRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsList.length);
    const randomContact = contactsList[randomIndex];
    // console.log({randomContact})
    // const updatedContactList = [...contactsList];
    // updatedContactList.push(randomContact);

    console.log(contactsList)
    // setContactsList(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={() => newRandomContact()}>Add Random Contact</button>

      <table className="Table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emy</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={`Contact picture ${index + 1}`}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
