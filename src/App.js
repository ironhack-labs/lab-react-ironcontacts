import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

const startingContacts = contactsData.slice(0, 5);

function addUniqueRandomContact(fromArr, toArr) {
  let uniqueId = [];
  let newContact = {};
  while (uniqueId.length === 0) {
    let randomIndex = Math.floor(Math.random() * fromArr.length);
    if (toArr.some((elem) => elem.id === fromArr[randomIndex].id) === false) {
      uniqueId.push(fromArr[randomIndex].id);
      newContact = fromArr[randomIndex];
    }
  }
  return newContact;
}

function App() {
  const [contactArray, setContactArray] = useState(startingContacts);

  function handleClickAdd() {
    setContactArray((oldArray) => [
      ...oldArray,
      addUniqueRandomContact(contactsData, contactArray),
    ]);
  }

  function sortByName() {
    const contactsByName = [...contactArray];
    console.log("contacts to sort: ", contactsByName);
    contactsByName.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    setContactArray(contactsByName);
  }

  function sortByPopularity() {
    const contactsByPopularity = [...contactArray];
    contactsByPopularity.sort((a, b) => {
      return parseFloat(a.popularity) > parseFloat(b.popularity) ? -1 : 1;
    });
    setContactArray(contactsByPopularity);
  }

  function deleteContact(id) {
    const contactsDel = [...contactArray];
    const indexToDelete = contactsDel.findIndex((elem) => 
      elem.id === id);
      contactsDel.splice(indexToDelete, 1);
    setContactArray(contactsDel);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttonsDiv">
        <button onClick={handleClickAdd}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <table className="contactsTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactArray.map((elem) => {
            elem.popularity = parseFloat(elem.popularity).toFixed(2);
            return (
              <tr key={elem.id}>
                <td>
                  <img
                    className="profilePicture"
                    src={elem.pictureUrl}
                    alt={`Profile of ${elem.name}`}
                  />
                </td>
                <td>{elem.name}</td>
                <td>{elem.popularity}</td>
                {elem.wonOscar ? <td>🏆</td> : <td></td>}
                {elem.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button onClick={() => {
                      deleteContact(elem.id)}}>Delete</button>
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
