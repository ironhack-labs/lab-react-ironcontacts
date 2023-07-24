import allContacts from './contacts.json'
import './App.css';

import React, {useState} from 'react';


function App() {

    const [firstFiveContacts] = useState(allContacts.slice(0,5));


  return (
    <div className="App">
     <table>
      <ul>
        {firstFiveContacts.map((contact) => 
          <li key={allContacts.id}>
          <td></td>
          <img src={contact.pictureUrl} alt={contact.name} style={{ width: '100px', height: 'auto' }}></img>
          <td></td>
          {contact.name}
          <td></td>
          {contact.popularity}</li>
        )}
      </ul>
     </table>
    </div>
  );
}

export default App;
