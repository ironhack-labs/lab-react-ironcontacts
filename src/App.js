import logo from "./logo.svg";
import React from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = React.useState(contactsData);

  const list = contacts
    .filter((contact, idx) => idx < 5)
    .map((entry) => {
      console.log(entry);
      return (
        <tr>
          <td>
            <img src={entry.pictureUrl}></img>
          </td>
          <td>{entry.name}</td>
          <td>{entry.popularity}</td>
        </tr>
      );
    });
  console.log(list);
  return (
    <div className="App">
      <table>
        <tbody>
          <tr className="table-head">
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default App;
