import "./App.css";
import Contacts from "./contacts.json";
import trophy from "./trophy.png";
import { useState } from "react";

function App() {
  //creating state and remaing contacts
  let remainingContacts = [...Contacts.slice(5)];
  console.log(remainingContacts);
  let index = 5;
  let initialContacts = Contacts.slice(0, index);

  const [showedContacts, setShowedContacts] = useState(initialContacts);

  const [possibleContacts, setPossibleContacts] = useState(remainingContacts);

  const addContact = () => {
    if (possibleContacts.length === 0) {
      console.log("No more Contacts to add");
      return;
    }
    const newContactIndex = Math.floor(Math.random() * possibleContacts.length);
    const newContact = possibleContacts[newContactIndex];

    const possibleContactsCopy = [...possibleContacts];
    possibleContactsCopy.splice(newContactIndex, 1);
    setPossibleContacts(possibleContactsCopy);

    setShowedContacts([...showedContacts, newContact]);
  };

  return (
    <div className="App">
      <button onClick={addContact}>Add a Contact</button>
      <table>
        <tr key="Header">
          <th key="Picture">Picture</th>
          <th key="Name">Name</th>
          <th key="Popularity">Popularity</th>
          <th key="WonOscar">Won Oscar</th>
          <th key="WonEmmy">Won Emmy</th>
        </tr>
        {showedContacts.map((elem) => {
          return (
            <>
              <tr key={elem.id}>
                <td key={elem.pictureUrl}>
                  <img
                    src={elem.pictureUrl}
                    style={{ maxWidth: "80px", maxHeight: "80px" }}
                    alt={elem.name}></img>
                </td>
                <td key={elem.name}>{elem.name}</td>
                <td key={elem.popularity}>{elem.popularity}</td>
                <td key={Math.random()}>
                  {elem.wonOscar ? (
                    <img
                      src={trophy}
                      alt="trophy"
                      style={{
                        maxWidth: "30px",
                        maxHeight: "30px",
                        background: "none",
                      }}
                    />
                  ) : null}
                </td>

                <td key={Math.random()}>
                  {elem.wonEmmy ? (
                    <img
                      src={trophy}
                      alt="trophy"
                      style={{
                        maxWidth: "30px",
                        maxHeight: "30px",
                        background: "none",
                      }}
                    />
                  ) : null}
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;
