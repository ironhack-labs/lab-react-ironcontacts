import { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

console.log("LENGTH",contactsData.length);

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length)
    // console.log("RANDOMNUMBER",randomNumber)
    console.log("RADOM CONTACT",contacts[randomNumber])
    setContacts([...contacts,contactsData[randomNumber]])

  }
  console.log("CONTACTS", contacts);

  return (
    <div className="App">
    <h1>IronContacts</h1>
      <button onClick={handleClick}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularitys</th>
            <th>Won oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {contacts.map((contact,index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    className="profile-pic"
                    src={contact.pictureUrl}
                    alt=""
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <span>🏆</span> : null}</td>
                <td>{contact.wonEmmy ? <span>🏆</span> : null}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
