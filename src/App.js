import { useState } from "react"
import './App.css';
import contactlist from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactlist.slice(0,5))

  const addRandom = () => {
    let dice = Math.floor(Math.random()*(contactlist.length))
    const newContact = [...contacts]
    newContact.unshift(contactlist[dice])
    setContacts(newContact)
  }

  const sortName = () => {
    const nameSorted = [...contacts].sort((a,b) =>  a.name<b.name? -1 : a.name==b.name? 0 : 1 
    )
    setContacts(nameSorted)
  }

  const sortPop = () => {
    const popSorted = [...contacts].sort((a,b) => b.popularity-a.popularity)
    setContacts(popSorted)
  }

  const deleteContact = (contactId) => {
    const filtered = [...contacts].filter(person => {
      return person.id !== contactId
    })
    setContacts(filtered)
  }

  return (
    <div className="App">
      <h1>Iron Contact</h1>
      <button onClick={addRandom}> add Random Contact</button>
      <button onClick={sortName}> sort by Name </button>
      <button onClick={sortPop}> sort by popularity </button>


      <table>
       <thead>
        <tr>
          <th>Picture</th>
          <th> Name </th>
          <th> Popularity </th>
          <th> Won Oscar</th>
          <th> Won Emmy</th>
          <th> button </th>
        </tr>
        </thead> 
        <tbody>
      {contacts.map((contact,i) => {
        return (
        <tr key={i}>
          <td><img src={contact.pictureUrl}  alt="image"/></td>
          <td>{contact.name} </td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? <td>🏆</td> : <td></td>}
          {contact.wonEmmy ? <td>🏆</td> : <td></td>}
          <td><button onClick={() => deleteContact(contact.id)}> delete </button></td>
        </tr>
         )
        })}
        </tbody> 
      </table> 
    </div>
  );
}

export default App;
