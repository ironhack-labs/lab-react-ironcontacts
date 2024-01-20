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

  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={getRandomContact}>Add Random Contact</button>
      
            <table>
              <tr>
                <th><h1>Picture</h1></th>
                <th><h1>Name</h1></th>
                <th><h1>Popularity</h1></th>
                <th><h1>Won an Oscar</h1></th>
                <th><h1>Won an Emmy</h1></th>
              </tr>
              {contacts.map((oneContact) => {
                  return (
              <tr key={oneContact.id}>
                <td> <img src={oneContact.pictureUrl} alt="" /> </td>
                <td><h2>{oneContact.name}</h2></td>
                <td><h2>{oneContact.popularity}</h2></td>
                <td> {oneContact.wonOscar ? <p>🏆</p> : <p></p> } </td>
                <td> {oneContact.wonEmmy ? <p>🌟</p> : <p></p> } </td>
              </tr>
              
            )
            })}
            </table>
    </div>
  );
}

export default App;
