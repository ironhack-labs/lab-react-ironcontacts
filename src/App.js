import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

const App = () => {
  const [contactsList, setContacts] = useState(contacts.slice(0, 5));
  const addRandomContact = () => {
    const remainingContacts = contacts.filter((contact) => {
      // return contact.id !== contactsList.id; --> returns the same items,
      // because filter() get the every contact in [contacts] and doesn't get elements in [contactsList]
      return !contactsList.find((element) => element.id === contact.id);
    });

    if (remainingContacts.length === 0) {
      alert("No more contacts to add!");
      return;
    }
    // const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    // const randomContact = remainingContacts[randomIndex];
    // the same -->
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    // FIRST APPROACH
    // const newContactsList = [...contactsList];
    // newContactsList.push(randomContact);
    // setContacts(newContactsList);

    // SECOND approach to update the useState Hook:
    // concatenating array (copy of state) and randomContact instead of push()
    setContacts([...contactsList, randomContact]);
  };

  const sortByPopularity = () => {
    const popularityList = [...contactsList];
    // popularityList.sort((a, b) => {
    //   return b.popularity - a.popularity;
    // });
    popularityList.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      else if (b.popularity < a.popularity) return -1;
      return 0;
    });
    setContacts(popularityList);
  };

  const sortByName = () => {
    const alphabeticalList = [...contactsList];
    alphabeticalList.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (b.name < a.name) return 1;
      return 0;
    });
    setContacts(alphabeticalList);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contactsList.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={addRandomContact}
        className="btn btn-outline-secondary fs-6"
      >
        Add Random Contact
      </button>
      <button
        onClick={sortByPopularity}
        className="btn btn-outline-secondary fs-6"
      >
        Sort by popularity
      </button>
      <button onClick={sortByName} className="btn btn-outline-secondary fs-6">
        Sort by name
      </button>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="fs-3">Picture</th>
              <th className="fs-3">Name</th>
              <th className="fs-3">Popularity</th>
              <th className="fs-3">Won Oscar</th>
              <th className="fs-3">Won Emmy</th>
              <th className="fs-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactsList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
                  <td>{contact.wonEmmy ? <p>🌟</p> : <p></p>}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger fs-6"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
