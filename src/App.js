import './App.css';
import { useState } from 'react';
import contacts from "./contacts.json";



function App() {
  // console.log("sort", contacts.sort(contacts.popularity));
  const [contact, setContact] = useState(contacts.slice(0,5));

  function addRandom() {
    let randomNr = Math.floor(Math.random()*contacts.length);

    let randomContact = contacts[randomNr];
    console.log("random", contacts[randomNr].name)
    
    let listedContacts = [];
    contact.forEach(el => {
      listedContacts.push(el.name);
    })
    console.log("array",listedContacts );

    if ( listedContacts.indexOf(contacts[randomNr].name) === -1 ) {
      setContact([...contact, randomContact]);
    }
  }

  function sortPopularity() {
    let sorted = [...contact].sort((a, b) => {
      return b.popularity - a.popularity;
    })
    setContact(sorted)
  }
  
  function sortName() {    
    let sorted = [...contact].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setContact(sorted)  
  }

  const clickToDelete = contactId => {
    console.log(contactId)
    const filteredContact = [...contact].filter(contact => {
      return contact.id !== contactId;
    });
 
    setContact(filteredContact);
  }

  return (
    <div className="App">
      <h1>IronContact</h1>
      <div className="btn-buttons">
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortPopularity}>Sort by popularity</button>
        <button onClick={sortName}>Sort by name</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {/* {contact.length < 5 ? } */}
        {contact.map(contact => (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            {contact.wonOscar ? <td>🏆</td> : <td></td> }
            {contact.wonEmmy ? <td>🌟</td> : <td></td> }

            <td><button onClick={() => clickToDelete(contact.id)} className="delete-btn">Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>


    </div>
  );
}

export default App;
