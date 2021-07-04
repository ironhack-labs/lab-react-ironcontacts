import {useState} from 'react';
import './App.css';

import contacts from "./contacts.json";



function App() {
  
  
  const [myContacts, setMyContacts] = useState(contacts.slice(0,6))
 
  function addRandomContact(){
    const randCont = contacts[Math.floor(Math.random()*contacts.length)]
    myContacts.includes(randCont) ? addRandomContact() : setMyContacts(prevState => [...prevState, randCont])
  }

  function sortByName(){
    const sortedAlphabetically = myContacts.sort((a,b) => b.name > a.name ? -1 : 1)
    setMyContacts([...sortedAlphabetically])
  }

  function sortByPopularity(){
    const sortedPopularity= myContacts.sort((a,b) => a.popularity > b.popularity ? -1 : 1)
    setMyContacts([...sortedPopularity])
  }

  function deleteContact(id){
    const updatedContacts = myContacts.filter(contact=> contact.id !== id)
    setMyContacts([...updatedContacts])
  }

  return (
    <>
    <main className='container'>
      <h1>IronContacts</h1>
      <button type='button' onClick={addRandomContact}>Add Random Contact</button>
      <button type='button' onClick={sortByName}>Sort by Name</button>
      <button type='button' onClick={sortByPopularity}>Sort by Popularity</button>
        <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            
            <tbody>
            {myContacts.map(contact => 
              <tr key={contact.id}>
                <td><img className="celeb-img" src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button type="button" onClick={()=>deleteContact(contact.id)}>Delete</button></td>
              </tr>)}
            </tbody>
        </table>

    </main>
        
    </>
  );
}

export default App;
