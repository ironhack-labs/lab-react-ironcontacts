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

  /* let sortedStrings = contacts.filter(element => element.name).sort();
  let [sortName, setSortName] = useState(sortedStrings); */

  const addRandomContact = () => {
    
    let randomContact = newContacts[Math.floor(Math.random() * newContacts.length)];
    
    setContacts([...contacts, randomContact]);

    setNewContacts(newContacts.filter(item => item.id !== randomContact.id));
    
    /* console.log('index to remove =>',newContacts.indexOf(randomContact));
    console.log('name =>',randomContact.name);
    console.log('rest of contacts after adding to contacts =>',newContacts);
    console.log('new contacts  =>',contacts); */
  };

  
  let sortContactsName = () => {
    
    contacts.sort((a,b) => {

      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      } 
      return 0;
      
    });
    setContacts([...contacts]);
  };

  const sortContactsPopularity = () => {

    contacts.sort((a,b) => {

      return b.popularity - a.popularity;
    });
    setContacts([...contacts]);
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
      <button onClick={sortContactsName} >Sort by Name</button>
      <button onClick={sortContactsPopularity} >Sort by Popularity</button>
    </div>
  );
}
export default App;
