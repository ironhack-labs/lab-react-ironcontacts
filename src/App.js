import { useState } from "react";
import "./App.css";
import contactData from "./contacts.json";

//////Iteration 1

const [contacts, setContacts] = useState(firstFive);

let firstFive = contacts.filter((element) => {
  return element.id.slice(0, 4);
});
setContacts(firstFive);

const addRandomContact = (contact) => {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  return contact.id;
};

function App() {
  return;
  <div className="App">
    <table>
      <thead>
        <h1>IronContacts</h1>
      </thead>
      <button onClick={() => addRandomContact(contact.id)}>
        Add Random Contact
      </button>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      <tbody>
        {firstFive.map((firstFiveObj) => {
          return (
            <tr key={firstFiveObj.id}>
              <td>
                {firstFiveObj.pictureUrl ? (
                  <img src={firstFiveObj.pictureUrl} alt={firstFive.name} />
                ) : (
                  <img
                    src="https://dummyimage.com/182x268/ffffff/000000"
                    alt="Placeholder"
                  />
                )}
              </td>
              <td>{firstFiveObj.name}</td>
              <td>{firstFiveObj.popularity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    ;
  </div>;
}

export default App;
