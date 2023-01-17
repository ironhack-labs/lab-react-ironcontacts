import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const firstFiveContacts = contacts.slice(0, 5);
  const [contactsArray, setContactsArray] = useState(firstFiveContacts);

  const createRandomContacts = () => {
    //calc the new list of contacts

    const randomContact =
      contacts[Math.floor(Math.random() * (contacts.length - 6))];

    //update state
    setContactsArray([...contactsArray, randomContact]);
  };

  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <button
        onClick={() => {
          createRandomContacts();
        }}
      >
        Add Random Contact
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsArray.map((contactDetails) => {
            return (
              <tr>
                <td>
                  <img
                    className="profilePicture"
                    src={contactDetails.pictureUrl}
                    alt="contact"
                  ></img>
                </td>
                <td>
                  <p>{contactDetails.name}</p>
                </td>
                <td>
                  <p>{contactDetails.popularity}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
