import { useState } from "react";
import "./App.css";
import arrayContacts from "./contacts.json"

function App() {
  let firstContacts = arrayContacts.slice(0, 5)
  const [contacts, setContacts] = useState(firstContacts)

  const handleAddRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * arrayContacts.length)
    let randomContact = arrayContacts[randomIndex]

    let existingContact = contacts.find((eachContact) => {
      return eachContact.id === randomContact.id
    })
    
    if(!existingContact) {
      setContacts([randomContact, ...contacts])
    } else {
      handleAddRandomContact();
    }
  }

  const handleSortByPopularity = () => {
    let mostPopular = [...contacts].sort((a, b) => {
      if(a.popularity > b.popularity) {
        return -1;
      } else if(a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    })
    setContacts(mostPopular)
  }

  const handleSortByName = () => {
    let sortedContacts = [...contacts].sort((a, b) => {
      if(a.name < b.name) {
        return -1;
      } else if(a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    })
    setContacts(sortedContacts)
  }

  const handleDeleteContact = (idContactToDelete) => {
    let arrayWithoutDelete = contacts.filter((eachContact) => {
      return eachContact.id !== idContactToDelete
    })
    setContacts(arrayWithoutDelete)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddRandomContact} id="add-contact">Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      <button onClick={handleSortByName}>Sort by name</button>
      <table id="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won a Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact) => (
            <tr key={eachContact.id}>
              <td><img src={eachContact.pictureUrl} alt="picture" style={{width:"80px"}}/></td>
              <td>{eachContact.name}</td>
              <td>{(eachContact.popularity).toFixed(2)}</td>
              <td>{eachContact.wonOscar ? "🏆" : null}</td>
              <td>{eachContact.wonEmmy ? "🌟" : null}</td>
              <td><button onClick={() => handleDeleteContact(eachContact.id)}>Delete contact</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
