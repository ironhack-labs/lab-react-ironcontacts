import { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json"


function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0,5))
  const [remainingContacts, setRemainingContacts] = useState(contactsList.slice(5,contactsList.length))
  

  function getRandomContact(){
    const copiedContacts = [...remainingContacts]
    let randomContact = copiedContacts[Math.floor(Math.random()*remainingContacts.length)]
    const newContacts = copiedContacts.filter((oneContact)=>{
      return oneContact!==randomContact
    })
    setRemainingContacts(newContacts)

    console.log(randomContact)
    console.log(newContacts)

    return randomContact
  }

  function addContact(){
      const newContact = getRandomContact()
      if(newContact){
        setContacts([...contacts, newContact]) 
      }
  }

  function sortByName(){
    const copiedContacts = [...contacts] 
    copiedContacts.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    setContacts(copiedContacts)
  }
  function sortByPopularity(){
    const copiedContacts = [...contacts]
    copiedContacts.sort((a,b)=>{
      return b.popularity-a.popularity
    })
    setContacts(copiedContacts)
  }
  function deleteContact(contact){
    const copiedContacts = [...contacts]
    const newContacts = copiedContacts.filter((oneContact)=>{
      return oneContact !== contact 
    })
    setContacts(newContacts)
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>

      <table id="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Emmy</th>
          <th>Won Oscar</th>
          <th>Actions</th>
        </tr>
        <tbody>
        {contacts.map((oneContact)=>{
          return (
            <tr key={oneContact._id}>
              <img className="contactPic" src={oneContact.pictureUrl} alt="" />
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity.toFixed(2)}</td>
              <td>{oneContact.wonEmmy ? "🌟":""}</td>
              <td>{oneContact.wonOscar ? "🏆":""}</td>
              <button onClick={()=>{deleteContact(oneContact)}}>Delete {oneContact.name}</button>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
