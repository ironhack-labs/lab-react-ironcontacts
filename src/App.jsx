import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

  const sortByName = () => {
    const sortedNames = [...firstFive].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setFirstFive(sortedNames);
  };

  const sortByPopularity = () => {
    const sortedPopularity = [...firstFive].sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    setFirstFive(sortedPopularity);
  };

  const deleteContacts = (contactId) => {
    const newList = firstFive.filter((contactDetails) => {
      return contactDetails.id !== contactId;
    });
    setFirstFive(newList);
  };

  let message = "";
  if (firstFive.length > 0) {
    message = <h1></h1>;
  } else {
    message = <h1>Sorry, no more contacts on your list 😔</h1>;
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {firstFive.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width="80" height="auto" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar === true && <p>🏆</p>}</td>
                <td>{contact.wonEmmy === true && <p>🌟</p>}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContacts(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {message}
    </div>
  );
}

export default App;
