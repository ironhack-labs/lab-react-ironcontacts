import React, { useState } from "react";

import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));

  
  const addRandomContact = (randomIndex) =>{
    randomIndex = Math.floor(Math.random() * contacts.length)
    setContactsArr([contacts[randomIndex], ...contactsArr]);
  }

  
  function sortByName() {
    const newArr = [...contactsArr].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContactsArr(newArr);
  }

  const sortByPops = () => {
    const newArr = [...contactsArr].sort((a, b) => b.popularity - a.popularity);

    setContactsArr(newArr);
  };

  function deleteContact(index) {
    const newArr = [...contactsArr].filter((person, idx) => idx !== index);

    setContactsArr(newArr);
  }

  return (
    <div className="App" >
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPops}>Sort by pops</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatirty</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((person, index) => {
            function deleteThisContact() {
              deleteContact(index);
            }
            {
            }

            return (
              <Celeb
                {...person}
                index={index}
                key={`${person.id} - ${index}`}
                deleteContact={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Celeb(props) {
  return (
    <tr>
      <td>
        <img
          src={props.pictureUrl}
          alt={props.name}
          style={{ height: "150px" }}
        />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
      <td>
        <button onClick={() => props.deleteContact(props.index)}>Delete</button>
      </td>
    </tr>
  );
}



export default App;