import logo from "./logo.svg";
import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

const contacts = contactsData.slice(0, 6);


function App() {

  const [contactsToDisplay, setContactsToDisplay] = useState(contacts);
const addContact = () => {
  const random = Math.floor(Math.random() * contactsData.length);
  const newContact = contactsData[random]
  setContactsToDisplay([...contactsToDisplay, newContact])
};

  return (
    <div className="App">
      <header>
        <button onClick={addContact}>Add a contact</button>
        <button >Sort by Name</button>
        <button >Sort by Popularity</button>
      </header>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
    {contactsToDisplay.map((contactsObj) => {
        return (
          <div>
          <tr key={contactsObj.id}>
            <td><img src={contactsObj.pictureUrl} alt="" /></td> <br />
            <td>{contactsObj.name}</td> <br />
            <td>{contactsObj.popularity}</td> <br />
            <td>{contactsObj.wonOscar === true && <p>🏆</p>}</td> <br />
            <td>{contactsObj.wonEmmy === true && <p>Yes</p>}</td>
            <td></td>
          </tr>
          </div>
        );
      })}
      </tbody>
      </table>
   
    </div>
  );
}

export default App;
