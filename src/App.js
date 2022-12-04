import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  let data = [...contacts];
  let fiveContacts = data.slice(0, 5);
  let newArray = data.slice(6);
  const [celebs, setCelebs] = useState(fiveContacts);

  function addRandom() {
    let randomContact = newArray[Math.floor(Math.random() * newArray.length)];
    setCelebs([...celebs, randomContact]);
  }

  function sortPopularity() {
    let populatirySorted = [...celebs].sort((a, b) =>
      a.popularity < b.popularity ? -1 : 1
    );
    setCelebs(populatirySorted);
  }

  function sortName() {
    let nameSorted = [...celebs].sort((a, b) => (a.name < b.name ? -1 : 1));
    setCelebs(nameSorted);
  }

  function deleteCeleb(id) {
    const deletedArray = [...celebs].filter((celeb) => {
      return celeb.id !== id;
    });
    setCelebs(deletedArray);
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortPopularity}>Sorte by Populatiry</button>
        <button onClick={sortName}>Sorte by Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatiry</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              <td>
                <button onClick={() => deleteCeleb(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;