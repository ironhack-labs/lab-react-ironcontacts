import React, { useState } from 'react';
import './App.css';
import contactsArr from './contacts.json';

function App() {
  // destructure
  let [list, getList] = useState(contactsArr.splice(0, 5))

  function ShowContacts() {
    return list.map((contact, i) => {
      return (
        <tr key={i}>
          <td>
            <img src={contact.pictureUrl} style={{ width: "50px"}}></img>
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
        </tr>
      )
    })
  }

  function AddRandom() {
    let randomContact = contactsArr[Math.floor(Math.random()*contactsArr.length)]

      // check if already exists
      if (list.name === randomContact.name) {
        AddRandom()
      }
      else {
        getList(list => {
          return [randomContact, ...list]
      })
    }
  }

  function SortName() {
    let cloneList = JSON.parse(JSON.stringify(list))

    cloneList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
      }
      else {
        return 0;
      }
    })
    getList(list => {
      return [...cloneList]
    })
  }

  function SortPopularity() {
    let cloneList = JSON.parse(JSON.stringify(list))

    cloneList.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      else if (a.popularity > b.popularity) {
        return -1;
      }
      else {
        return 0;
      }
    })
    getList(list => {
      return [...cloneList]
    })
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={AddRandom}>Add Random Contact</button>
      <button onClick={SortName}>Sort By Name</button>
      <button onClick={SortPopularity}>Sort By Popularity</button>
      <div>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <ShowContacts />
        </table>
      </div>
    </div>
  );
}

export default App;
