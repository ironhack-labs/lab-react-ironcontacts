import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
// import { useState } from "react";
// import { Fragment } from "react";

const firstFive = contacts.slice(0, 5);

function App() {
  const [initialState, setInitialState] = useState(firstFive);

  function addNewContactArray() {
    const newRandomContactPosition = Math.floor(
      Math.random() * contacts.length
    );

    //return a copy of part of the array inside a new array. From the initial til the end of the array, without modifying the original array.
    const randomContact = contacts[newRandomContactPosition];

    //create copy of the array because .unshift .push give you the length of the array and the array. Two ways to make a copy.
    const copy = [...initialState];
    //const copy = initialState.slice();

    //find new array and compare from each contact their names (props)
    // const existsInStateArr = randomContact.find(
    //   (contacts) => contacts.name === newContact.name
    // );

    //if all goes okay, then return the OLD array
    // if (existsInStateArr) {
    //   return;
    // }

    //we use method .unshift however we could also use .push for that and we push new array beginning
    copy.unshift(randomContact);

    //new set of contacts will have the new array included
    // setListContacts([newContact, ...listContacts]);
    setInitialState(copy);
  }

  function sortByName() {
    const copy = [...initialState];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setInitialState(copy);
  }

  function sortByPop() {
    const copy = [...initialState];
    // copy.sort((a, b) => a.popularity - b.popularity); //ascending
    copy.sort((a, b) => b.popularity - a.popularity); //descending
    setInitialState(copy);
  }

  function deleteById(id) {
    const copy = [...initialState];
    setInitialState(initialState.filter((e) => e.id !== id));
    setInitialState(copy);
  }

  return (
    <div className="App">
      <button onClick={addNewContactArray}>Add a new Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <table style={{ margin: "0 auto" }}>
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
          <th>
            <h2>Action</h2>
          </th>
        </thead>
        <tbody>
          {initialState.map((celeb) => {
            return (
              <tr className="trstyle">
                <td>
                  <img className="contactStyle" src={celeb.pictureUrl} alt="" />
                </td>
                <td>
                  <h3>{celeb.name}</h3>
                </td>
                <td>
                  <h3>{celeb.popularity.toFixed(2)}</h3>
                </td>
                <td>
                  <button onClick={deleteById}>Delete</button>
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
