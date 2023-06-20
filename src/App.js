import logo from "./logo.svg";
import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

const contacts = contactsData.slice(0, 5);


function App() {

  const [contactsToDisplay, setContactsToDisplay] = useState(contacts);


  return (
    <div className="App">
      <header></header>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
    {contactsToDisplay.map((contactsObj) => {
        return (
          <tr key={contactsObj.id}>
            <td><img src={contactsObj.pictureUrl} class="image" alt="" /></td>
            <td>{contactsObj.name}</td>
            <td>{contactsObj.popularity}</td>
          </tr>
        );
      })}
      </tbody>
      </table>
    </div>
  );
}

export default App;
