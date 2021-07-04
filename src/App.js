import {useState} from 'react';
import './App.css';

import contactsArr from "./contacts.json";



function App() {
  
  
  const [contacts, setContacts] = useState(contactsArr.slice(0,6))
 
  return (
    <>
    <main className='container'>
      <h1>IronContacts</h1>
        <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            
            <tbody>
            {contacts.map(contact => 
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
