import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0, 5));
  
  function randomContact(){
    let otherContacts = contacts.slice(5);
    const newContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];
    setDisplayedContacts([newContact, ...displayedContacts]);
    otherContacts = [...otherContacts.filter(contact => contact !== newContact)];
  }

  function sortByPopularity(){
    let sortedArray = [...displayedContacts].sort((a, b) => b.popularity - a.popularity);
    setDisplayedContacts(sortedArray);
  }

  function sortByName(){
    let sortedArray = [...displayedContacts].sort((a, b)=> a.name.localeCompare(b.name));
    setDisplayedContacts(sortedArray);
  }

  function deleteOneDisplay(id){
    const filteredArr = displayedContacts.filter( contact => contact.id !== id );
    setDisplayedContacts(filteredArr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={ randomContact }>Add Random Contact</button>
      <button onClick={ sortByPopularity }>Sort by popularity</button>
      <button onClick={ sortByName }>Sort by name</button>
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
              {displayedContacts.map(contact => (              
                  <tr key={contact.id}>
                    <td><img height={150} src={contact.pictureUrl} alt={contact.name} /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    {contact.wonOscar ? <td>🏆</td> : <td></td>}
                    {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                    <td><button onClick={ () => deleteOneDisplay(contact.id) }>Delete</button></td>
                  </tr>       
              ))}    
          </tbody>
        </table> 
    </div>
  );
}

export default App;
