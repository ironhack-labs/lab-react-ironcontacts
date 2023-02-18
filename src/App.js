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

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="actions">
        <button onClick={addRandomHandler}>Add Random Contact</button>
        <button onClick={sortByPopularityHandler}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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
                <td>{value.wonEmmy ? <p> 🏆 </p> : <p> </p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
