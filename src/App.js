import logo from "./logo.svg";
import React, { useState } from "react";
import contactData from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactData.slice(0, 5));
  const randomContact = () => {
    const random = contactData[Math.floor(Math.random() * contactData.length)];
    setContacts([random, ...contacts]);
  };
  const sortPop = () => {
    contacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    setContacts([...contacts]);
  };
  const sortNm = () => {
    contacts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setContacts([...contacts]);
  };
  const deleteCeleb = (celebId) => {
    const filteredCelebs = contacts.filter((contact) => {
      return contact.id !== celebId;
    }); 

    setContacts(filteredCelebs);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={() => randomContact()}> Add random</button>
      <button onClick={() => sortPop()}> sort popularity</button>
      <button onClick={() => sortNm()}> sort name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
        </tr>
        <tr>
          {contacts.map((el) => {
            return (
              <tr>
                <td>
                  <img src={el.pictureUrl} alt="celbpic" />
                </td>
                <td>{el.name}</td>
                <td>{Math.round(el.popularity)}</td>
                {el.wonOscar ? <td>🏆</td> : <td></td>}
                {el.wonEmmy ? <td>won an Emmy</td> : <td> try later</td>}
                <td>
                  <button onClick={() => deleteCeleb(el.id)}> Delete </button>
                </td>
              </tr>
            );
          })}
        </tr>
      </table>
    </div>
  );
}

export default App;
