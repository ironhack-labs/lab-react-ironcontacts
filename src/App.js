// import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import React, { useState } from 'react';

function App() {
  const firstFive = contacts.slice(0, 5)
  const [contact, setContact] = useState(firstFive);

  const addContact = () => {
    // Need to remake code to only add items that havent already appeared

    // let array4 = [];
    // contacts.forEach(element => {
    //   contact.forEach(element2 => {
    //     if (element.id === element2.id) {
    //       console.log(element.name)
    //       array4.push(element)
    //     }
    //   })
    // })
    // for (let i = 0; i < array4.length; i++) {
    //   totalArray = contacts.filter(word => word.id !== array4[i].id)
    // }
    // console.log(array4)
    // console.log(contact[0].id)
    // console.log(contacts)
    // console.log(totalArray)

    let rndm = Math.floor(Math.random() * contacts.length)

    // })
    // let something = [];
    // let compare = contact
    // compare.forEach(obj => {
    //   contacts.forEach(obj2 => {
    //     if (obj.id === obj2.id)
    //     console.log(obj2.id)
    //   })
    // })
    // let unique = contact
    setContact([...contact, contacts[rndm]])
  }

  const alphabetically = () => {
    let alphabet = contact
    alphabet.sort((a, b) => a.name.localeCompare(b.name))
    setContact([...alphabet])
  }
  const popularity = () => {
    // Code not working for some reason with LocalCompare
    let popular = contact
    // popular.sort((a, b) => a.popularity.localeCompare(b.popularity))
    popular.sort(function (a, b) {
      if (a.popularity > b.popularity) { return -1; }
      else if (b.popularity > a.popularity) { return 1; }
      else {
        return 0;
      }
    })
    setContact([...popular])
  }
  const deleteContact = (key) => {
    const deleted = contact.filter(contacted => {
      return contacted.id !== key;
    })
    setContact([...deleted])
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={popularity}>Sort by popularity</button>
      <button onClick={alphabetically}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {contact.map(cont => {
          return (
            <tbody key={cont.id}>
              <tr>
                <td><img height="100px" src={cont.pictureUrl}></img></td>
                <td>{cont.name}</td>
                <td>{cont.popularity}</td>
                {cont.wonOscar ? <td>🏆</td> : <td>Great movie but no Oscars!</td>}
                {cont.wonEmmy ? <td>🏆</td> : <td>Great movie but no Emmy!</td>}
                <td><button onClick={() =>deleteContact(cont.id)}>Delete</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}


export default App;
