import React, {useState} from 'react';
import './App.css';
import contactsJson from './contacts.json';
import Card from './components/Card';


function App() {
  let [contacts, setContacts] = useState(contactsJson.slice(0,5))
  const addRandomContact = () => {
    console.log("holi")
    let arr = [...contacts]
    let randomContactPosition = Math.floor(Math.random()*(contactsJson.length-5)+5)
    arr.push(contactsJson[randomContactPosition])
    setContacts(contacts=arr)
  }
  const sortByName = () => {
    let arr = [...contacts]
    // console.log([...contacts])
    // console.log(arr) //Everything working GREAT but still dont get why this log prints the array already sorted prior to the use of.sort 
    arr.sort((a,b) => {
      return a.name.toString().localeCompare(b.name)
    })
    setContacts(contacts=arr)
  }
  const sortByPop = () => {
    console.log("pop")
    let arr = [...contacts]
    arr.sort((a,b) => {
      if (a.popularity < b.popularity) return 1
      else return -1
    })
    console.log(contacts=arr)
  }

  const deleteContact = (id) => {
    setContacts(
      (contacts.filter(contact => contact.id !== id))
    )
    console.log([...contacts])
  }


  return (
    <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByName}>Sort by name</button>
    <button onClick={sortByPop}>Sort by pop</button>
      {contacts.map(contact=> <Card 
          key={contact.id}
          {...contact}
          deleteContact={deleteContact}
        />
      )}
    </div>
  )
}

export default App;
