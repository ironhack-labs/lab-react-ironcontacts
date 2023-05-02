import './App.css';
import { useState } from "react"
import contacts from "./contacts.json";

function App() {
  let [myContacts, setContacts] = useState(contacts.filter((c, i) => i < 5))

  function addRandomContact(){
    const randIndex = Math.floor(Math.random() * ((contacts.length-1) - 5 + 1) + 5)
    const randomContact = contacts[randIndex]
    setContacts([...myContacts, randomContact])
  }

  function sortByName() {
    const sortedContacts = [...myContacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }
  
  function sortByPopularity(){
    const sortedContacts = [...myContacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedContacts)
  }

  function deleteContact(id){
    const newContacts = [...myContacts]

    newContacts.splice(newContacts.findIndex(i => i.id === id), 1)
    setContacts(newContacts)
  }

  return (
    <div className="App">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myContacts.map(contact => {
            return(
              <tr key={contact.id}>
                <td> <img height={100} src={contact.pictureUrl}/></td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100)/100}</td>
                <td>{contact.wonOscar ? '🏆' : null}</td>
                <td>{contact.wonEmmy ? '🏆' : null}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            )  
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;