import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts';

function App() {

  var filteredContacts;

  return (
     <div className="App">
      <header className="App-header">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {filteredContacts = contacts.map(contact => 
          <tr>
            <td><img src={contact.pictureUrl} alt={contact.name} width={'55px'} height={'85px'}/></td>
            <td><p>{contact.name}</p></td>
            <td><p>{contact.popularity}</p></td>
          </tr>
          )}
      </table> 

      

      </header>
    </div>
  );
}

export default App;
