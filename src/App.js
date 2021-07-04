import {useState} from 'react';
import './App.css';

import contacts from "./contacts.json";



function App() {
  
  
  const [myContacts, setMyContacts] = useState(contacts.slice(0,6))
 
  function addRandomContact(){
    const randCont = contacts[Math.floor(Math.random()*contacts.length)]
    myContacts.includes(randCont) ? addRandomContact() : setMyContacts(prevState => [...prevState, randCont])
  }
  return (
    <>
    <main className='container'>
      <h1>IronContacts</h1>
      <button type='button' onClick={addRandomContact}>Add Random Contact</button>
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
              </tr>)}
            </tbody>
        </table>

    </main>
        
    </>
  );
}

export default App;
