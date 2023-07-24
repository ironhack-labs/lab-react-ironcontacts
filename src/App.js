import allContacts from './contacts.json'
import './App.css';


import React, {useState} from 'react';


function App() {

    const [firstFiveContacts] = useState(allContacts.slice(0,5));
    const [contacts, updateContacts] = useState(firstFiveContacts);

    const addContact = () => {
      let newContacts = allContacts.slice(5);
      console.log('newContacts:', newContacts);
      let randomIndex = Math.floor(Math.random() * newContacts.length);
      console.log('randomIndex:', randomIndex);
      const newContact = newContacts[randomIndex];
      console.log('newContact:', newContact);
      const updatedContacts = [...contacts, newContact];
      console.log('updatedContacts:', updatedContacts);
      updateContacts(updatedContacts);
    };

    const popularity = () => {
      const sortPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity);
      updateContacts(sortPopularity);
    }

    const name = () => {
      const sortName = [...contacts].sort((a,b) => a.name.localeCompare(b.name));
      updateContacts(sortName);
    }

    const deleteContact = (id) => {
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      updateContacts(updatedContacts)
    }

  return (
    <div className="App">

      <h1>IronContacts</h1>

    <div className="buttonDisplay">
      <button className="button" onClick={addContact}>Add Random Contact</button>
      <br></br>
      <button className="button" onClick={popularity}>Sort by Popularity</button>
      <br></br>
      <button className="button" onClick={name}>Sort by Name</button>
    </div>
      
    
     <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '100px', height: 'auto' }}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? "🏆" : null}</td>
              <td><button className="buttonDelete" onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
     </table>
    </div>
  );
}

export default App;
