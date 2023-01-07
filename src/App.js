import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ContactsArray from './contacts.json'

function App() {
  const copyOfContactsArray = [...ContactsArray]
  const slicedCopiedArray = copyOfContactsArray.slice(0,5)
  const restOfArray = copyOfContactsArray.slice(5)
  const [contacts, setContacts] = useState(slicedCopiedArray)

  const addRandomContact = () =>{
    console.log(contacts)
    let randomNumber = Math.floor(Math.random()* restOfArray.length)
    console.log(randomNumber)
    let elementToAdd = restOfArray[randomNumber]
    console.log(elementToAdd)
    let copyOfSlicedArray = [...slicedCopiedArray] 
    copyOfSlicedArray.push(elementToAdd)
    console.log(copyOfSlicedArray)
    setContacts(copyOfSlicedArray)
  }



  return (
    <div className="App">
    <button onClick={addRandomContact}>Add a Random Contact</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar?</td>
            <td>Won an Emmy?</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact=>{
            return <tr>
              <td><img className="small" src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar && <td>🏆</td>}
              {contact.wonEmmy && <td>✨</td>}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
