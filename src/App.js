import { useState } from "react";
import "./App.css";
import contactsFromJSON from "./contacts.json";

function App() {
  let firstFive = contactsFromJSON.slice(0, 5);
  let remaining = contactsFromJSON.slice(5, contactsFromJSON.length);
  const [contacts, setContacts] = useState(firstFive);
  const [remainingContacts, setRemainingContacts] = useState(remaining);

  //Iteration 3 | Add New Random Contacts
  //Step1
  const removeSelectedContact = (id) => {
    const newRemainingContacts = remainingContacts.filter((item) => {
      return item.id !== id;
    });
    setRemainingContacts(newRemainingContacts);
  };

  //Iteration 3 | Add New Random Contacts
  //Step2
  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      setContacts((prevContact) => {
        const randomContact =
          remainingContacts[
            Math.floor(Math.random() * remainingContacts.length)
          ];
        prevContact.push(randomContact);
        removeSelectedContact(randomContact.id);
        const newContacts = [...prevContact];
        return newContacts;
      });
    }
  };

  //Iteration 4 | Sort Contacts by Name and Popularity
  //Step1: Sort by popularity

  const sortByPopularity = () => {
    setContacts((prevContact) => {
      const copy = [...prevContact];
      copy.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
      return copy;
    });
  };
  //Iteration 4 | Sort Contacts by Name and Popularity
  //Step2: Sort by name
  const sortByName = () => {
    setContacts((prevContact) => {
      const copy = [...prevContact];
      copy.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      return copy;
    });
  };

  //Iteration 5 | Remove Contacts
  const deleteContact = (contactId) => {
    const newList = contacts.filter((item) => {
      return item.id !== contactId;
    });
    setContacts(newList);
  };

  //Iteration 1 | Display 5 Contacts
  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <div className='container'>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>

      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {/* Iteration 2 | Conditionally Display Awards Info */}
          {contacts.map((contact) => {
            return (
              <tr key={contact.name}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{parseFloat(contact.popularity).toFixed(2)}</td>
                {contact.wonOscar ? <td> 🏆 </td> : <td></td>}
                {contact.wonEmmy ? <td> ⭐️ </td> : <td></td>}
                <td>
                  {" "}
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>{" "}
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
