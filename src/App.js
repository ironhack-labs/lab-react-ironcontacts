import "./App.css";
import contactsArr from "./contacts.json"
import { useState } from "react";


function App() {
  let firstFive = contactsArr.slice(0,5);
  const [contacts, setContacts] = useState(firstFive)

  
  const addRandom = () => {
    const remainingContacts = contactsArr.slice(5)
    let randomIndex = Math.floor(Math.random() * remainingContacts.length);
    let newRandomContact = remainingContacts[randomIndex];
    remainingContacts.splice(randomIndex, 1);
    setContacts([...contacts, newRandomContact]);
  }
  
  const sortByName = () => {
    const sortedCopy = [...contacts];
    sortedCopy.sort((a,b) => a.name.localeCompare(b.name));
    setContacts(sortedCopy)
  }
  const sortByPopularity = () => {
    const sortedCopy = [...contacts];
    sortedCopy.sort((a,b) => b.popularity - a.popularity);
    setContacts(sortedCopy)
  }
  const deleteContact = (contactId) => {
    const newList = contacts.filter(contact => contact.id !== contactId)
    setContacts(newList)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
          <table>
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
            <tbody>
              {contacts.map((contact)=>{
                return (
                  <tr key={contact.id}>
                    <th><img src={contact.pictureUrl} alt={contact.name}/></th>
                    <th>{contact.name}</th>
                    <th>{contact.popularity.toFixed(2)}</th>
                    {contact.wonOscar ? <th> 🏆 </th> : <th></th>}
                    {contact.wonEmmy ? <th> ⭐️ </th> : <th></th>}
                    <th><button onClick={() => deleteContact(contact.id)}>Delete</button></th>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

export default App;
