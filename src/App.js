import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

const copyContacts = [...contacts];

let firstFive = copyContacts.splice(0, 5);

function App() {
  const [displayContacts, setDisplayContacts] = useState(firstFive);

  //
  const addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const appearContacts = [...displayContacts, randomContact];
    setDisplayContacts(appearContacts);
  };

  //
  const Compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const sortByName = () => {
    let sortContacts = [...displayContacts];
    sortContacts.sort(Compare);
    setDisplayContacts(sortContacts);
  };

  //

  const Compare2 = (a, b) => {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  };

  const sortByPopularity = () => {
    let sortContacts = [...displayContacts];
    sortContacts.sort(Compare2);

    setDisplayContacts(sortContacts);
  };

  //

  const deleteContact = (contactId) => {
    const filteredContacts = displayContacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setDisplayContacts(filteredContacts);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          addRandomContact();
        }}
      >
        Add Random Contact
      </button>
      <br />
      <button onClick={() => sortByName()}>Sort Contacts by Name</button>
      <button onClick={() => sortByPopularity()}>
        Sort Contacts by Popularity
      </button>
      <br />
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>

        {displayContacts.map((element) => {
          return (
            <tr className="row" key={element.id}>
              <td>
                <img src={element.pictureUrl} alt="contact-person" />
              </td>
              <td>
                <li>{element.name}</li>
              </td>
              <td>
                <li>{Math.floor(element.popularity * 100) / 100}</li>
              </td>
              <td>
                <li>{element.wonOscar && "🏆"}</li>
              </td>
              <td>
                <li>{element.wonEmmy && "🏆"}</li>
              </td>
              <td>
                <li>
                  <button onClick={() => deleteContact(element.id)}>
                    Delete Contact
                  </button>
                </li>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
