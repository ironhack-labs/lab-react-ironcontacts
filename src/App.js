import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  let [originalContact, setOriginalContact] = useState(contacts.slice(5));
  let [contact, setContact] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    if (originalContact.length > 0) {
      let randomNumber = Math.floor(Math.random() * originalContact.length);
      let current = originalContact[randomNumber];
      let remaining = [...originalContact];
      remaining.splice(randomNumber, 1);
      setContact([...contact, current]);
      setOriginalContact([...remaining]);
    }
  };

  const sortByName = () => {
    setContact((oldState) => {
      return [...oldState].sort((a, b) => a.name.localeCompare(b.name));
    });
  };

  const sortByPopularity = () => {
    setContact((oldState) => {
      return [...oldState].sort((a, b) => b.popularity - a.popularity);
    });
  };

  const removeContact = (id) => {
    setContact((oldState) => {
      return [...oldState].filter((e) => e.id !== id);
    });
  };

  return (
    <>
      <button onClick={() => addRandomContact()}> Add Random Contacts</button>
      <button onClick={() => sortByName()}> Sort by name</button>
      <button onClick={() => sortByPopularity()}> Sort by popularity</button>
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
            {contact.map((e) => {
              return (
                <tr key={e.id}>
                  <td>
                    <button onClick={() => removeContact(e.id)}>remove</button>
                  </td>
                  <td>
                    <img className="pic" src={e.pictureUrl} alt="" />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.popularity}</td>
                  {e.wonOscar === true && <td> 🏆</td>}
                  {e.wonEmmy === true && <td> 🏆</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;
