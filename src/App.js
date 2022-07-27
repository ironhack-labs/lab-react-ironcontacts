import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";



function App() {
  
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5))


  function addRandom() {
    let clonedArray
    setContacts((prevContacts)=>{
      let contact = contactsArr[Math.floor(Math.random()*contactsArr.length)] 
        //need to check if contact.id === element.id of prevContacts exists -> if yes search another one, if no add to clonedArray (couldn´t make that work sadly)
        clonedArray = [...prevContacts, contact]
        return clonedArray 
      })
    console.log(clonedArray)
  }

  function sortByName() {
    setContacts((prevContacts) => {
      const copy = [...prevContacts]
      copy.sort( (a,b) => {
        let fa = a.name
        let fb = b.name

    if (fa < fb) {
        return -1
    }
    if (fa > fb) {
        return 1
    }
    return 0
       } )
       return copy
    })
  }

  function sortByPopularity() {
    setContacts((prevContacts) => {
      const copy = [...prevContacts]
      copy.sort((a, b) => {
        return b.popularity - a.popularity
      })
      return copy
    })
  }

  function deleteContact(id) {
    setContacts((prevContacts) => {
      let newArr = prevContacts.filter((contactObj) => {
        return contactObj.id !== id 
      })
      return newArr
    })
  }

  return (
    <div className="App" >
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByName}>sort by name</button>
      <button onClick={sortByPopularity}>sort by popularity</button>
      {contacts.map((contactObj) => {
        return (
          <table key={contactObj.id}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Emmy</th>
              <th>Won Oscar</th>
              <th>Actions</th>
            </tr>
            <td>
              <img src={contactObj.pictureUrl} alt={contactObj.name} />
            </td>
            <td>{contactObj.name}</td>
            <td>{contactObj.popularity}</td>
            {contactObj.wonEmmy && <td>🏆</td> }
            {contactObj.wonOscar && <td>🏆</td>}
            <td><button onClick={() => deleteContact(contactObj.id)}>Delete</button></td>
          </table>
          
        )
      })}
    </div>
  );
}

export default App;
