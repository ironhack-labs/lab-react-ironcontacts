import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
  const firstFiveContacts = contacts.slice(0, 5);
  console.log(firstFiveContacts);

  return (
    <div className="App">
      <div>
        <h3>IronContacts</h3>
        <table>
          <td>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </td>
          {firstFiveContacts.map((contact) => 
         // return
          <tr>
          <td><img src={contact.pictureUrl} alt=""/></td>
            <td>{contact.name}</td>
            
            <td>{contact.popularity}</td>
          </tr>
          )}

        </table>
      </div>
    </div>
  );
}

export default App;

{
  /* <div>
          
           </div> */
}
