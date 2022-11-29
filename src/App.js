import contacts from "./contacts.json";
import './App.css';
import React, { useState } from 'react';

function App() {
  let myContacts = contacts.slice(0, 6);
  const [contact, setContact] = useState(myContacts);

  function addContact() {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    if(!contact.includes(newContact)){
      setContact([newContact, ...contact])
    } else if(contact.length < contacts.length ){
      addContact();
    }
    console.log(newContact)
  }

  function sortByPopularity(){
    let sortedContacts = [...contact].sort((a,b) => a.popularity - b.popularity);
    setContact(sortedContacts)
  }

  function sortByName() {
    let sortedByName = [...contact].sort((a, b) => a.name > b.name ? 1 : -1)
    setContact(sortedByName)
  }
  
  function deleteContact(id) {
    const filteredContacts = contact.filter(celeb => {
      return celeb.id !== id;
    })
    setContact(filteredContacts)
  }
  return (
    <div className="App">
      <section>
        <table>
          <colgroup span="3"></colgroup>
          <th></th>
          <th className="header">IronContacts</th>
          <br></br>
          <button onClick={addContact}>Add Random Contact</button>
          <button onClick={sortByPopularity}>Sort by popularity</button>
          <button onClick={sortByName}>Sort by name</button>

          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contact.map((contact) => (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} height="100" width="80"></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>

              </tr>
              
          ))}
          
        </table>
      </section>
    </div>
  );
}

export default App;
