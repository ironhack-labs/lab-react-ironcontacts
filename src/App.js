import contacts from "./contacts.json";
import './App.css';
import React, { useState } from 'react';

function App() {

  let fiveContactsArr = contacts.slice(0, 5)
  const [list, setList] = useState(fiveContactsArr)

  const handleAddContact = () => {
    const newItem = contacts[Math.ceil(Math.random() * contacts.length)]
    if (!list.includes(newItem)) {
      setList((prevList) => [newItem, ...prevList])
    }
  }

  const sortByPopularity = () => {
    const sortedList = [...list].sort((a, b) => b.popularity - a.popularity)
    setList(sortedList)
  }

  const sortByName = () => {
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name))
    setList(sortedList)
  }

  const deleteOneContact = contactId => {
    const filteredContacts = list.filter(contact => {
      return contact.id !== contactId;
    });
    setList(filteredContacts);
  };


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => handleAddContact()}>Add random contact</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <button onClick={() => sortByName()}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {/* iteration 1 and 2 */}
        {/* {contacts.map(contact => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td><img className="img-td" src={contact.pictureUrl} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <h5>🏆</h5> : <h5></h5>}</td>
                <td>{contact.wonEmmy ? <h5>🏆</h5> : <h5></h5>}</td>
              </tr>
            </tbody>
          )
        })} */}
        {/* iteration 3 button random contacts */}
        {list.map(contact => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td><img className="img-td" src={contact.pictureUrl} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                <td><button onClick={() => deleteOneContact(contact.id)}>Delete</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default App;
