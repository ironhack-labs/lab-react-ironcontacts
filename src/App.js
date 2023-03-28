import { useState, useEffect } from 'react';
import contactsDB from '../src/contacts.json';
import './App.css';

function App() {

  const [contacts, setContact]= useState([]);

  useEffect(() => {
    console.log("entro")
    setContact([contactsDB[0], contactsDB[1], contactsDB[2], contactsDB[3], contactsDB[4]])}, [])

  console.log(contacts)

  const addRandomContact = () => {
    setContact(prev => {
      const remainingContacts = contactsDB.filter(x => !contacts.includes(x))
      console.log(remainingContacts)
      if (remainingContacts.length > 0) {
        return [...prev, remainingContacts[Math.floor(Math.random() * remainingContacts.length)]]
      }
      return prev
    })
  }

  const handleSortPopularity = () => {
    setContact([...contacts.sort((a, b) => {
      return b.popularity - a.popularity
    })])
  }

  const handleSortName = () => {
    setContact([...contacts.sort((a, b) => {
      let contactA = a.name.toLowerCase(),
          contactB = b.name.toLowerCase();

      if (contactA < contactB) {
        return -1
      }
      if (contactA > contactB) {
        return 1
      }
      return 0
    })])
  }
  

  return (
    <div className="App row">
      <h1 className="text-center">IronContacts</h1>
      <div className="col bg-info">

      </div>
      <div className="col-8 d-flex bg-light p-2 flex-column row justify-content-center align-items-center">
        <div>
          <button className="btn btn-outline-info  me-2" onClick={addRandomContact}>Add Random Contact</button>
          <button className="btn btn-outline-info  me-2" onClick={handleSortPopularity}>Sort by popularity</button>
          <button className="btn btn-outline-info  me-2" onClick={handleSortName}>Sort by name</button>
        </div>
        
        <div className="col-6">
          <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Won Oscar</th>
              <th scope="col">Won Emmy</th>
            </tr>
          </thead>
          {contacts.map(contact => (
          <tbody key={contact.id}>
            <tr>
              <th scope="row"><img src={contact.pictureUrl} alt=""/></th>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{(contact.wonOscar ? '🏆' : '')}</td>
              <td>{(contact.wonEmmy ? '🏆' : '')}</td>
            </tr>
          </tbody>
          ))}
          </table>
        </div>
      </div>
      <div className="col bg-info">

      </div>
    </div>
  );
}

export default App;
