import React from "react";
import "./App.css";
import contacts from "./contacts.json";

const firstFiveContacts = contacts.slice(0, 5);

function App() {
  const [updatedContacts, setUpdatedContacts] = React.useState(
    firstFiveContacts
  );

  function addNew() {
    const randomContact =
      contacts[Math.floor(Math.random() * (contacts.length + 1))];
    const newArr = [...updatedContacts, randomContact];
    setUpdatedContacts(newArr);
  }

  return (
    <div className="App">
      <p>Ironcontacts</p>
      <button onClick={addNew}>Add Random</button>
      <table>
        <tr>
          <th>PICTURE</th>
          <th>NAME</th>
          <th>POPULARITY</th>
        </tr>

        {updatedContacts.map((contact) => {
          const { pictureUrl, name, popularity } = contact;
          return (
            <tr>
              <td>
                <img src={pictureUrl} alt="image" style={{ height: "80px" }} />
              </td>
              <td>{name}</td>
              <td>{popularity.toFixed(2)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
