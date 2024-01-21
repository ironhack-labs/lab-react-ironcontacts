import contactsData from './contacts.json'
import { useState} from 'react'
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
 
  function addRandomContact(){
    let contactsCopy = [...contacts]
    let randomNum = Math.floor(Math.random() * contactsData.length)
    do {
      randomNum = Math.floor(Math.random() * contactsData.length);
      const isDuplicate = contactsCopy.some((element) => {
        return contactsData[randomNum].id === element.id;
      });
  
      if (!isDuplicate) {
        contactsCopy.push(contactsData[randomNum]);
        setContacts(contactsCopy);
        break;
      }
    } while (true);
  
  }

function sortByPopularity(){
  let contactsCopy = [...contacts]
  contactsCopy.sort((a,b)=>{
    return b.popularity - a.popularity
  })
  setContacts(contactsCopy)
}

function sortByName(){
  let contactsCopy = [...contacts]
  contactsCopy.sort((a,b)=>{
    return a.name.localeCompare(b.name)
  })
  setContacts(contactsCopy)
}

function deleteContact(actorId){
  const filteredContacts = contacts.filter((element)=>{
    return element.id !== actorId
    
  })
  setContacts(filteredContacts)
}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
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
        {contacts.map((actor)=>{
          return(<tr key={actor.id}>
            <td><img src={actor.pictureUrl} alt="" /></td>
            <td>{actor.name}</td>
            <td>{actor.popularity.toFixed(2)}</td>
            {actor.wonOscar ? <td>🏆</td> : <td></td>}
            {actor.wonEmmy ? <td>🌟</td> : <td></td>}
            <td><button onClick={()=>{deleteContact(actor.id)}}>Delete</button></td>
          </tr>)
        })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
