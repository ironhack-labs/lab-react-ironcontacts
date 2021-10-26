import React from "react";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import { Fragment } from "react";

function App() {
  const initialState = contacts.slice(0, 5);
  const [listContacts, setListContacts] = useState(initialState);
  // const [initialSort, setInitialSort] = useState("alphabet");
  function addNewContactArray() {
    const newContact = {
      // // <img src={contacts.pictureUrl} alt=""/>,
      // name:"{contacts.name}",
      // popularity:"{contacts.popularity.toFixed(2)}",
      // isReal=false,
    };

    //return a copy of part of the array inside a new array. From the initial til the end of the array, without modifying the original array.
    const newArr = listContacts.slice();

    //find new array and compare from each contact their names (props)
    const existsInStateArr = newArr.find(
      (contacts) => contacts.name === newContact.name
    );

    //if all goes okay, then return the OLD array
    if (existsInStateArr) {
      return;
    }

    //we use method .unshift however we could also use .push for that and we push new array beginning
    newArr.unshift(newContact);

    //new set of contacts will have the new array included
    setListContacts([newContact, ...listContacts]);
  }

  return (
    <div>
      <button onClick={addNewContactArray}>Add a new Contact</button>
      <table>
        <caption>
          <b>
            <h1>IronContacts</h1>
          </b>
        </caption>
        <thead>
          <th>
            <h2>Picture</h2>
          </th>
          <th>
            <h2>Name</h2>
          </th>
          <th>
            <h2>Popularity</h2>
          </th>
        </thead>
        <tbody>
          {listContacts.map((contacts, index) => {
            return (
              <tr className="trstyle">
                <Fragment key={index}>
                  <td>
                    <img
                      className="contactStyle"
                      src={contacts.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>
                    <h3>{contacts.name}</h3>
                  </td>
                  <td>
                    <h3>{contacts.popularity.toFixed(2)}</h3>
                  </td>
                </Fragment>
              </tr>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
}

export default App;
