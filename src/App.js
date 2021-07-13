import React, { useState } from 'react';
import './App.css';
import contactsArr from './contacts.json';
import 'bulma/css/bulma.css'

function App() {

  let [list, updateList] = useState(contactsArr.slice(0, 5));

  const ShowContacts = () => {
    return list.map((contact, i) => {
      return (
        <tbody key={i}>
          <tr>
            <td className="td"><img src={contact.pictureUrl} style={{ width: "50px"}}></img></td>
            <td className="td">{contact.name}</td>
            <td className="td">{contact.popularity.toFixed(2)}</td>
            <td className="td"><button onClick={() => DeleteContact(i)} className="button is-danger is-light">Delete</button></td> 
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
    <>
    <div className="block">
      <h1 className="title">IronContacts</h1>
      <button onClick={AddRandom} className="button is-primary is-light">Add Random Contact</button>
      <button onClick={SortName} className="button is-link is-light">Sort By Name</button>
      <button onClick={SortPopularity} className="button is-link is-light">Sort By Popularity</button>
    </div>
    <div className="block">
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th className="th">Picture</th>
              <th className="th">Name</th>
              <th className="th">Popularity</th>
            </tr>
          </thead>
          <ShowContacts />
        </table>
    </div>
    </>
  );
};

export default App;
