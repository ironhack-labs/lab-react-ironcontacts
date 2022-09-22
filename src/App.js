import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function getRandomContact(initList, endList) {
  const rand = Math.floor(Math.random() * (endList - initList) + initList);
  return rand;
}

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));
  // const [otherContacts, setOtherContacts] = useState(contactList.slice(5));

  // const randomContact = () => {
  //   setOtherContacts(Math.floor(Math.random() * otherContacts.length));
  //   setContacts([...contacts, setOtherContacts]);
  // };

  const randomContact = () => {
    setContacts([
      ...contacts,
      contactList[getRandomContact(0, contactList.length)],
    ]);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={randomContact}> Add Random Contact</button>
      </div>
      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    style={{ height: "80px" }}
                    src={contact.pictureUrl}
                    alt="hallo"
                  ></img>
                </td>
                <td> {contact.name}</td>
                <td> {contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
