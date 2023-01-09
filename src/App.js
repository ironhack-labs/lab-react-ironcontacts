import { useState } from 'react';
import './App.css';
import ContactsArray from './contacts.json'

const copyOfContactsArray = [...ContactsArray];
let slicedCopiedArray = copyOfContactsArray.slice(0,5);
const restOfArray = copyOfContactsArray.slice(5);


function App() {
  
  const [contacts, setContacts] = useState(slicedCopiedArray)

  const addRandomContact = () =>{
    let randomNumber = Math.floor(Math.random()* restOfArray.length)
    console.log(randomNumber)
    console.log(restOfArray.length)
    let elementToAdd = restOfArray[randomNumber]
        let copyOfSlicedArray = [...contacts] 

    console.log(elementToAdd)
    copyOfSlicedArray.push(elementToAdd)
    slicedCopiedArray = copyOfSlicedArray
    restOfArray.splice(randomNumber, 1)
    console.log(copyOfSlicedArray)
    setContacts(copyOfSlicedArray)
  }

  const popularitySort = ()=>{
    let sortedContacts = contacts.sort((a,b)=>{
      return b.popularity - a.popularity
    })
    setContacts(sortedContacts)
  }

  const nameSort = ()=>{
    let sortedContactsByName = contacts.sort((a,b)=>{
      if (a.name < b.name){
        return -1;
      } else if (a.name > b.name){
        return 1;
      } else {
        return 0
      }   
     })
    console.log(sortedContactsByName)
    setContacts(sortedContactsByName)
  }

  const deleteContact = (event)=>{
    let target = event.target
      console.log(target)
    let contactId = target.value
      console.log(contactId)
    let newContactsArray = contacts.filter(contact=>{
      return contact.id !== contactId
    })
    setContacts(newContactsArray)
    /* let rowElement = target.parentElement.parentElement
    rowElement.style.display = "none"
    console.log(rowElement) */
  }


  return (
    <div className="App">
    <button onClick={addRandomContact}>Add a Random Contact</button>
    <button onClick={popularitySort}>Sort by Popularity</button>
        <button onClick={nameSort}>Sort by Name</button>

      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar?</td>
            <td>Won an Emmy?</td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact=>{
            return <tr>
              <td><img className="small" src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar ? <td>🏆</td> : <td> </td>}
              {contact.wonEmmy ? <td>✨</td> : <td> </td>}
              <td><button value={contact.id}onClick={deleteContact}>Delete Contact</button></td>
            </tr>
            
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
