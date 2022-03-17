// jshint esversion:8
import "./App.css";
import contactsData from './contacts.json';
import {useState} from 'react';

function App() {
  //state1
  let [contacts, setContacts] = useState([contactsData[0], contactsData[1], contactsData[2], contactsData[3], contactsData[4]]);

  let restOfContacts = [];
  for(let i = 5; i < contactsData.length;i++) {
    restOfContacts.push(contactsData[i]);
  }
  //state2
  let [newContacts, setNewContacts] = useState(restOfContacts);


  const addRandomContact = () => {
    
    let randomContact = newContacts[Math.floor(Math.random() * newContacts.length)];
    
    setContacts([...contacts, randomContact]);

    setNewContacts(newContacts.filter(item => item.id !== randomContact.id));
    
    /* console.log('index to remove =>',newContacts.indexOf(randomContact));
    console.log('name =>',randomContact.name);
    console.log('rest of contacts after adding to contacts =>',newContacts);
    console.log('new contacts  =>',contacts); */

    
    
  };

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
      <button onClick={addRandomContact}>Add Random Contact</button> 
    </div>
  );
}
export default App;
