import React, { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json";

let firstFiveArr = contactsList.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(() => firstFiveArr);
  const contactsCopy = [...contacts];

  const addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsList.length);

    // jeito de fazer com if

    if (!contactsCopy.includes(contactsList[randomIndex]))
      contactsCopy.push(contactsList[randomIndex]);

    // jeito de fazer com filter

    // let filteredArr = contactsList.filter((contact) => {
    //   return !contactsCopy.includes(contact);
    // });

    // contactsCopy.push(filteredArr[randomIndex]);

    // console.log("filteredArr: ", filteredArr);
    // console.log("contactsCopy: ", contactsCopy);

    // console.log("problem >>>>>", filteredArr[randomIndex]);

    setContacts(contactsCopy);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="contact-table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won a Oscar</th>
          <th>Won a Emmy</th>
        </tr>
        {contacts.map((contacts) => {
          return (
            <tr key={contacts.id}>
              <td>
                <img src={contacts.pictureUrl} alt="contact" />
              </td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity.toFixed(2)}</td>
              <td>{contacts.wonOscar ? <>🏆</> : <>No</>}</td>

              <td>{contacts.wonEmmy ? <>🏆</> : <>No</>}</td>
            </tr>
          );
        })}
      </table>
      <button onClick={() => addRandomContact()}>Add Random Contact</button>
    </div>
  );
}

export default App;
