import "./App.css";
import allContacts from "./contacts.json";
// import Contacts from "./components/Contacts";
import { useState } from "react";
function App() {
  // let contacts = pContacts.slice(0, 5);

  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const [randomContacts, setRandomContacts] = useState(allContacts.slice(5));

  const randomContact = function getRandom(min, max) {
    min = 0;
    max = randomContacts.length - 1;
    const i = Math.trunc(Math.random() * max);
    const thisGuy = randomContacts[i];

    return thisGuy;
  };
  console.log(randomContacts);

  console.log("--------------", randomContact().id);

  return (
    <div className="App">
      {/* <button onClick={() => setContacts(contacts.unshift(randomContact))}>
        Add random contact
      </button> */}

      <h1>IronContacts:</h1>
      <div className="contact2">
        <button onClick={() => setContacts(contacts.unshift(randomContact()))}>
          Add Random Contact
        </button>
        <button>Sort by name</button>
        <button>Sort by popularity</button>
      </div>
      <table className="contact">
        <div className="contact">
          <tr className="contact">
            <td className="title">Picture</td>
            <td className="title">Name</td>
            <td className="title">Rating</td>
            <td className="title">Won Oscar</td>
            <td className="title">Won Emmy</td>
          </tr>
        </div>
        {contacts.map((contact) => {
          return (
            <div className="contact" key={contact.id}>
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
