import {useState} from 'react'
import "./App.css";
import Contacts from './contacts.json'



function App() {

  const contactList = Contacts.slice(0,5)
  const remainingContacts = Contacts.slice(5)
  // console.log(remainingContacts)
  // console.log(contactList)

  const [contacts, setContacts] = useState(contactList)

  function getRandomContact(){
    const copyContacts = [...contacts]
    const randomNum = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts.splice(randomNum, 1)
    console.log(randomContact)
    copyContacts.push(randomContact[0])
    setContacts(copyContacts)
    // console.log(copyContacts)    
  }


  function sortByPopularity(){
    const copyContacts = [...contacts]
    copyContacts.sort((a,b)=>b.popularity-a.popularity)
    setContacts(copyContacts)
  }

  function sortByName(){
    const copyContacts = [...contacts]
    copyContacts.sort((a,b) => a.name.localeCompare(b.name))
    setContacts(copyContacts)
  }

  function deleteContact(id){
    const copyContacts = contacts.filter((oneContact)=>{return oneContact.id !== id})
    setContacts(copyContacts)
  }
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      
            <table className="table">
              <tr>
                <th><h2>Picture</h2></th>
                <th><h2>Name</h2></th>
                <th><h2>Popularity</h2></th>
                <th><h2>Won an Oscar</h2></th>
                <th><h2>Won an Emmy</h2></th>
                <th><h2>Actions</h2></th>
              </tr>
              {contacts.map((oneContact) => {
                  return (
              <tr key={oneContact.id}>
                <td> <img src={oneContact.pictureUrl} alt="" /> </td>
                <td><h3>{oneContact.name}</h3></td>
                <td><h3>{oneContact.popularity}</h3></td>
                <td> {oneContact.wonOscar ? <p>🏆</p> : <p></p> } </td>
                <td> {oneContact.wonEmmy ? <p>🌟</p> : <p></p> } </td>
                <td><button onClick={()=> {deleteContact(oneContact.id)}}>Delete</button></td>
              </tr>
              
            )
            })}
            </table>
    </div>
  );
}

export default App;
