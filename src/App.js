import { useState } from 'react';
import contactsList from "./contacts.json";
import './App.css';

const contactsCopy = [...contactsList]
const fiveConacts = contactsCopy.splice(0,5)


function App() {  
  const [contacts, setContacts] = useState(fiveConacts);
  const [sortedByName, setSortedByName] = useState(false);
  const [sortedByPopularity, setSortedByPopularity] = useState(false);


  const sortByPopularity = () => { 
    const popularityOrederdContacts = [...contacts]
    sortedByPopularity? popularityOrederdContacts.sort((a, b) => a.popularity - b.popularity) : popularityOrederdContacts.sort((a, b) => b.popularity - a.popularity)
    setContacts(popularityOrederdContacts)
    setSortedByPopularity(!sortedByPopularity)
  }

  const sortByName = () => { 
    const nameOrederdContacts = [...contacts]
    sortedByName? nameOrederdContacts.sort((a,b) => a.name.localeCompare(b.name)) :  nameOrederdContacts.sort((a,b) => b.name.localeCompare(a.name))
    setContacts(nameOrederdContacts)
    setSortedByName(!sortedByName)
  }
 

  const addNewContact = () => {    
    const random = Math.floor(Math.random() * contactsCopy.length)
    const newContact = contactsCopy[random] 
    setContacts([...contacts, newContact])
    contactsCopy.splice(random,1)
  }

  const deleteContact = contactId => {
    const filtredContacts = contacts.filter(contact => {
      return contact.id !== contactId
    });
    setContacts(filtredContacts)
  }

   

  return (    
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick = {() => addNewContact()}>Add Random Contact</button>
        <button onClick = {() => sortByPopularity()}>Sort by popularity</button>
        <button onClick = {() => sortByName()}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(contact => {        
          return (            
            <tr key={contact.id} className="ContactCard" >
              <td> <img src={contact.pictureUrl} alt="star"/> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td><button className="btn-remove" onClick = {() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
