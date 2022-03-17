// jshint esversion:8
import "./App.css";
import contactsData from './contacts.json';
import {useState} from 'react';

function App() {

  let [contacts, setContacts] = useState([contactsData[0], contactsData[1], contactsData[2], contactsData[3], contactsData[4]]);


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="ironContacts">
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>

          </tr>
          {contacts.map(contact => {
            return (
              <tr key={contact.id} className="celebrity">
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <span>🏆</span>}</td>
                <td>{contact.wonEmmy && <span>🏆</span>}</td>
              </tr>
            )
          })}      
        </tbody>
      </table>
    </div>
  );
}
export default App;
