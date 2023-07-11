import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  const [firstFiveData, setFirstFiveData] = useState(fiveContacts);

  const getRandomContact = (contacts) => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    return setFirstFiveData([...firstFiveData, randomContact]);
  };

  const sortByName = () => {
    const nameSortArray = [...firstFiveData];
    nameSortArray.sort((a, b) => a.name.localeCompare(b.name));
    return setFirstFiveData(nameSortArray);
  };

  const sortByPopularity = () => {
    const popSortArray = [...firstFiveData];
    popSortArray.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    return setFirstFiveData(popSortArray);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = firstFiveData.filter((contact) => {
      return contact.id != contactId;
    });
    setFirstFiveData(filteredContacts);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => getRandomContact(contacts)}>
        Add Random Contact
      </button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        {firstFiveData.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img style={{ width: 100 }} src={contact.pictureUrl}></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p> 🏆 </p> : <p> </p>}</td>
                <td>{contact.wonEmmy ? <p> 🏆 </p> : <p> </p>}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
