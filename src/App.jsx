/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import contactsJson from '/src/contacts.json'
import '/src/tableStyle.css'
function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0,5))
  const contactMap = contacts.map((contact, index)=>{
    const element = 
        <tr key={index}>
          <td><img src={contact.pictureUrl}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? <td>🏆</td>: <td></td>}
          {contact.wonEmmy ? <td>🌟</td>: <td></td>}
          <td><button onClick={deleteEntry} id={contact.id}>Delete</button></td>
        </tr>

    return element;  
  })


function addRandom(){
  const idArr = [];
  contacts.forEach(contact=>idArr.push(contact.id))
  const filtered = contactsJson.filter(elem=>!idArr.includes(elem.id))
  const randomIndex = Math.floor(Math.random() * filtered.length)
  const randomElem = filtered[randomIndex]
  setContacts(prevArr=> [...prevArr, randomElem])

}
function deleteEntry(e){
  const entryId = e.target.id;
  const newArr = contacts.filter((contact, index)=>contact.id !== entryId)

  setContacts(newArr)

}
function sortPopularity(){
  setContacts(prevArr=> [...prevArr].sort((a,b)=>a.popularity < b.popularity ? 1 : -1))
}
function sortName(){
  setContacts(prevArr => [...prevArr].sort((a,b)=>a.name > b.name ? 1 : -1))
}



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactMap}
        </tbody>
      </table>
    </div>
  );
}

export default App;
