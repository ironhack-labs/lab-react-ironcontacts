import { useState } from "react";
import "./App.css";
import contactsDb from "./contacts.json";

function App() {
  //Iteration 1
  const contactsCopy = [...contactsDb];
  const fiveContacts = contactsCopy.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);

  //Iteration 3
  let randomContact = contactsCopy[Math.floor(Math.random() * contactsCopy.length)];
  let newContacts = [randomContact, ...contacts];

  const addRandomContact = () => {
    // console.log("randomContact: ", randomContact);   //check random contact
    // console.log("newContacts: ", newContacts);       //check new contacts list
    setContacts(newContacts);
  };

  //Iteration 4
  function sortByName() {
    let sortedContacts = contacts.slice().sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedContacts)
  }

  function sortByPopularity() {
    let sortedContacts = contacts.slice().sort(function(a, b){
      return b.popularity-a.popularity;
  })
  setContacts(sortedContacts)
  }

  //Iteration 5
  const deleteContact = (id) => {
    const updatedList = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedList);
  };

  return (
    <div className="App">
      <div>
        <h1 className="title">IronContacts</h1>
      </div>
      <div>
        <button className="topButton" onClick={addRandomContact}>Add Random Contact</button>
        <button className="topButton" onClick={sortByName}>Sort By Name</button>
        <button className="topButton" onClick={sortByPopularity}>Sort By Popularity</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete Contact</th>
          </tr>

          {contacts.map((contact) => {
            return (
              <tr className="card" key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="img"/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p>✅</p> : <p>❌</p>}</td>
                <td>{contact.wonEmmy ? <p>✅</p> : <p>❌</p>}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete Contact</button>
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
