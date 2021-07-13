import React, { useState } from 'react';
import './App.css';
import contactsArr from './contacts.json';

function App() {

  let [list, updateList] = useState(contactsArr.slice(0, 5));

  const ShowContacts = () => {
    return list.map((contact, i) => {
      return (
        <tbody key={i}>
          <tr>
            <td><img src={contact.pictureUrl} style={{ width: "50px"}}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td><button onClick={() => DeleteContact(i)}>Delete</button></td> 
          </tr>
        </tbody>
      )
    })
  };

  const AddRandom = () => {
    let randomContact = contactsArr[Math.floor(Math.random()*contactsArr.length)]

      // check if already exists
      if (list.name === randomContact.name) {
        AddRandom()
      }
      else {
        updateList(list => {
          return [randomContact, ...list]
      })
    }
  };

  const SortName = () => {
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
    updateList(list => {
      return [...cloneList]
    })
  };

  const SortPopularity = () => {
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
    updateList(list => {
      return [...cloneList]
    })
  };

  const DeleteContact = (index) => {
    let filteredArr = list.filter((contact, i) => {
      return i !== index
    })
    updateList(filteredArr)
  };

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={AddRandom}>Add Random Contact</button>
      <button onClick={SortName}>Sort By Name</button>
      <button onClick={SortPopularity}>Sort By Popularity</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <ShowContacts />
        </table>
      </div>
    </div>
  );
};

export default App;
