import contactsArray from "./contacts.json";
import { useState } from "react"
import './index.css'

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0,5))
  
  function addRandom(){
    let random
    const randomIndex = Math.floor(Math.random() * contactsArray.length) + 1
    if ((!contactsArray.map(person => person.id).includes((contactsArray[randomIndex])).id)){
      random = randomIndex
    }
    setContacts([...contacts, contactsArray[random]])
  }

  function sortByPopularity(){
    setContacts([...contacts].sort((a,b) => b.popularity - a.popularity))
  }

  function sortByName(){
    setContacts([...contacts].sort((a,b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }))
  }

  function deleteItem(id){
     const filtered = [...contacts].filter( person => {
      return person.id !== id
     }
     )
     setContacts(filtered)
  }
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      <table>
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Poplularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
        </tr>
        {contacts.map(person => {
          return (
          <tr>
            <td><img src={person.pictureUrl} alt="img"/></td>
            <td>{person.name}</td>
            <td>{(person.popularity).toFixed(2)}</td>
            <td>{person.wonOscar &&  "🏆"}</td>
            <td>{person.wonEmmy &&  "🏆"}</td>  
            <td><button onClick={() => deleteItem(person.id)}>Delete</button></td>
          </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;
