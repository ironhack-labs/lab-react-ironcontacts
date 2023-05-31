import "./App.css";
import pContacts from "./contacts.json";
import Contacts from "./components/Contacts";
// import { useState } from "react";
function App() {
  // const [contacts, setContacts] = useState("contacts");

  let contacts = pContacts.slice(0, 5);

  return (
    <div className="App">
      <h1>IronContacts:</h1>
      <table className="contact">
        <div className="contact">
          <tr className="contact">
            <td>Picture</td>
            <td>Name</td>
            <td>Rating</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
          </tr>
        </div>
        {contacts.map((contact) => {
          return (
            <div className="contact">
              <tr className="contact">
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contact pic"
                    className="pic"
                  ></img>
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : ""}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
}
export default App;
