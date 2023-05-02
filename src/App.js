import './App.css';
import contactsdata from "./contacts.json"
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsdata.slice(0,5))

  function addRandom() {
    let compareArr = contacts.slice()
    let randomNumber = Math.floor(Math.random() * (contactsdata.slice(contacts.length).length))
    let newContact = contactsdata[randomNumber]

    console.log(newContact)
    

    
    setContacts([...contacts, newContact])
  }

  function sortPopularity() {

    let sortedArr = contacts.slice()
    sortedArr = sortedArr.sort((a,b) => 
      
    b.popularity - a.popularity
  )
    setContacts(sortedArr)

  }

  function sortName() {

    let sortedArr = contacts.slice()
    sortedArr = sortedArr.sort((a,b) => {
      
    if(a.name < b.name) {
      return -1
    }
    if(a.name > b.name) {
      return 1
    }
    return 0
  })
    setContacts(sortedArr)
  }

  function deleting(id) {
    console.log(id)
    let newArr = contacts.slice()
    newArr = newArr.filter(contact => {
      if(contact.id === id){
        return false
      } else {return true}
    
    })
    
    setContacts(newArr)
  }

  return (

    
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>

      <table>
        <tr>
          <td><h3>Picture</h3></td>
          <td><h3>Name</h3></td>
          <td><h3>Popularity</h3></td>
          <td><h3>Oscar winner?</h3></td>
          <td><h3>Emmy winner?</h3></td>
          <td><h3>Actions</h3></td>
        </tr>
        {contacts.map(contact => {

          return(

            <tr>
              <td><img className="image" src={contact.pictureUrl} alt="picture" /></td>
              <td>{contact.name}</td>
              <td>{(contact.popularity).toFixed(2)}</td>
              <td>{contact.wonOscar ? <p>Yes</p> : <p>No</p>}</td>
              <td>{contact.wonEmmy ? <p>Yes</p> : <p>No</p>}</td>
              <td><button onClick={() => deleting(contact.id)}>Delete</button></td>
            </tr>
          )
        })}
      </table>

     
      
    </div>
  );
}

export default App;
