import React from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const shortContactList = contacts.slice(0, 5);

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <tr className="header-row">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {shortContactList.map((elm) => {
          return (
            <tr>
              <td>
                <img src={elm.pictureUrl} alt={elm.name + "photo"} />
              </td>
              <td>{elm.name}</td>
              <td>{Math.round(elm.popularity * 100) / 100}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
