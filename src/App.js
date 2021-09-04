import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

let arrContacts = JSON.parse(JSON.stringify(contacts));

function App() {
  let primeirosCinco = arrContacts.splice(0, 5);
  let positionRandom = Math.floor(Math.random() * arrContacts.length) + 1;
  let randomActor = arrContacts[positionRandom];

/*   console.log(primeirosCinco);
  console.log(randomActor); */

  const [contacts, setContacts] = useState(primeirosCinco);

  const AddRandom = () => {
    console.log("Add is running");
    
     setContacts([...contacts, randomActor])
     };

  const sortName = () => {
    let sortedArray = [...contacts];
    sortedArray.sort((a,b)=> {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0;
    });
    console.log(sortedArray);
    setContacts(sortedArray);
  }
  const sortPopularity = () => {
    let sortedArray = [...contacts];
    sortedArray.sort((a, b) => {
      return a.popularity - b.popularity;
    })
    console.log(sortedArray);
    setContacts(sortedArray);
  }

  const deleteThis = () => {

    console.log("delete is running");
    
    
   };

  return (
    <div className="App">
      <button onClick={AddRandom}>Add Random Contact</button>
      <button onClick={sortName}>Sort by Name</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} width="80px" alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td><button onClick=''>DELETE</button> </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
