import './App.css';
import contactsJSON from "./contacts.json"
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5))
  const [order, setOrder] = useState("DSC")

  /*  const randomContact = contactsJSON[Math.floor(Math.random() * contactsJSON.length)]
   const addRandomContact = (contact) => {
         if (randomContact.id !== contactId)
     }
     setContacts(randomContact.id)
 } */


  const sorting = (col) => {
    if (order === "DSC") {
      const sorted = [...contacts].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setContacts(sorted)
      setOrder("ASC")
    }
    if (order === "ASC") {
      const sorted = [...contacts].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setContacts(sorted)
      setOrder("DSC")
    }
  }

  const popSorting = (col) => {
    if (order === "DSC") {
      const sorted = [...contacts].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setContacts(sorted)
      setOrder("ASC")
    }
    if (order === "ASC") {
      const sorted = [...contacts].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setContacts(sorted)
      setOrder("DSC")
    }
  }


  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId
    })
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
      <h1>Ironcontacts</h1>

      <div>
        <button className='btn'>Add Random Contact</button>
        <button onClick={() => sorting("name")} className='btn'>Sort by Name</button>
        <button onClick={() => popSorting("popularity")} className='btn'>Sort by Popularity</button>
      </div>

      <div className='table'>
        <table className='table-outside'>
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
        </table>
        {contacts.map(contact => {
          return (

            <table className='table-inside'>
              <tbody>
                <tr key={contacts.id}>
                  <td> <img src={contact.pictureUrl} alt="Picture" /></td>
                  <td>{contact.name}</td>
                  <td>{(contact.popularity).toFixed(2)}</td>
                  <td>{contact.wonOscar === true && <p>🏆</p>}</td>
                  <td>{contact.wonEmmy === true && <p>🏆</p>}</td>
                  <td><button onClick={() => deleteContact(contact.id)} className="btn-delete">Delete</button></td>
                </tr>
              </tbody>

            </table>)

        })}
      </div>
    </div>
  );
}

export default App;
