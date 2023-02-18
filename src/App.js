import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactArray, setContacts] = useState(contacts.slice(0, 5));

  const addRandomHandler = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    if (!contactArray.find(contact => contact.id === contacts[randomIndex].id)) setContacts([...contactArray, contacts[randomIndex]]);
    else if (contacts.length > contactArray.length) addRandomHandler()
  };

  const sortByPopularityHandler = () => {
    contactArray.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts([...contactArray]);
  };

  const sortAlphabetically = () => {
    contactArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (b.name < a.name) {
        return 1
      }
      return 0
    })
    setContacts([...contactArray]);
  }




  const deleteContact = (event) => {
    const filteredArray = contactArray.filter((contact) => {
      return contact.id !== event
    })
    setContacts(filteredArray);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="actions">
        <button onClick={addRandomHandler}>Add Random Contact</button>
        <button onClick={sortByPopularityHandler}>Sort by popularity</button>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {contactArray.map((value) => {
            return (
              <tr key={value.id}>
                <td>
                  <img src={value.pictureUrl} alt="celeb-prof-pic" />
                </td>
                <td>{value.name}</td>
                <td>{value.popularity}</td>
                <td>{value.wonOscar ? <p> 🏆 </p> : <p> </p>}</td>
                <td>{value.wonEmmy ? <p> ⭐ </p> : <p> </p>}</td>
                <td><button onClick={() => deleteContact(value.id)} className="btn-delete">Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
