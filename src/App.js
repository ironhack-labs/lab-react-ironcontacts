import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  const fiveContacts = [...contactsArr].slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);

  const listItems = contacts.map((contact) => {
    const roundedPopularity = Math.round(contact.popularity * 100) / 100;
    return (
      <tr>
        <td>
          <img
            className="contact-img"
            src={contact.pictureUrl}
            alt="Contact profile"
          />
        </td>
        <td>{contact.name}</td>
        <td>{roundedPopularity}</td>
        {contact.wonOscar ? <td>🏆</td> : <td></td>}
        {contact.wonEmmy ? <td>🏆</td> : <td></td>}
      </tr>
    );
  });


/// NOT READY!
  function addRandomContact() {
    let randomNum = Math.floor(Math.random() * contactsArr.length);   
    setContacts((prevState) => {
      let returnArr = [];
      return prevState.push(contactsArr[randomNum]);
    });

  return (
    <div className="App">
      <div className="header">
        <h1>IronContacts</h1>
        <button onClick={() => addRandomContact()}>Add Random Contact</button>
      </div>

      <table className="contacts-table">
        <tbody>
          <tr>
            <td>
              <strong>Picture</strong>
            </td>
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>Popularity</strong>
            </td>
            <td>
              <strong>
                Won
                <br />
                Oscar
              </strong>
            </td>
            <td>
              <strong>
                Won
                <br />
                Emmy
              </strong>
            </td>
          </tr>
          {listItems}
        </tbody>
      </table>
    </div>
  );
}

export default App;
