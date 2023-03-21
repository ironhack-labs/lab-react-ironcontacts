import './App.css';
import contactsArray from './contacts.json';
import { useState } from 'react';


function App() {
  const firstFiveContacts = contactsArray.slice(0, 5);
  const [contacts , setContacts ] = useState(firstFiveContacts);
  
  return (
    <div className="App">
    <h1>IronContacts</h1>
      <table> 
        <thead>
         <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
       </thead>
      </table>
      <tbody>
      {contacts.map(contact => {
          let imgContent;
          imgContent = <img className ="picture" src={contact.pictureUrl} alt={contact.name} />
          return (
            <tr key={contact.id}>
              <td>{imgContent}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          )
        })}
      </tbody>
    </div>
  );
}

export default App;
