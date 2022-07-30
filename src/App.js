// src/App.js
import "./App.css";
import { useState } from "react";
import dataContacts from "./contacts.json";

function App() {
  const firstSixContacts = dataContacts.filter((item, idx) => idx < 6);

  const [contacts, setContacts] = useState(firstSixContacts);

  const HandlerRandom = () => {
    setContacts((prevVals) => [
      ...prevVals,
      dataContacts[
        Math.floor(Math.random() * (dataContacts.length - 0 + 1) + 0)
      ],
    ]);
  };

  const HandlerSort = () => {
    setContacts((prevVals) => {
      let valueArray = prevVals.map((contact) => Object.values(contact)[0]);
      let orderedNames = valueArray.sort();
      let result = prevVals.map((item, idx, array) =>
        array.find((contact) => {
          return orderedNames[idx] === Object.values(contact)[0];
        })
      );
      return result;
    });
  };

  const HandlerSortPop = ()=>{
    setContacts((prevVals) => {
      let valueArray = prevVals.map((contact) => Object.values(contact)[2]);
      let orderedPop = valueArray.sort(function(a,b){return b-a});
      let result = prevVals.map((item, idx, array) =>
        array.find((contact) => {
          return orderedPop[idx] === Object.values(contact)[2];
        })
      );
      return result;
    });

  }

  const HandlerDelete = (id) => {
    console.log(id)
    setContacts((prevVals) => prevVals.filter(contact => contact.id !== id))
  }

  return (
    <div className="App">

      <h1>IronContacts</h1>
      <div className="buttons">
      <button
        className="button"
        onClick={() => {
          HandlerRandom();
        }}
      >
        Random contact
      </button>

      <button
        className="button"
        onClick={() => {
          HandlerSort();
        }}
      >
        Sort by name
      </button>

      <button
        className="button"
        onClick={() => {
          HandlerSortPop();
        }}
      >
        Sort by popularity
      </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contacts[0].name"
                    height={200}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
             <td>
             <button
        className="button"
        onClick={() => {
          HandlerDelete(contact.id);
        }}
      >
        Delete
      </button>



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
