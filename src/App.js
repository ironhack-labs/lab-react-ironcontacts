import React, { useState } from 'react'; 
import contacts from './contacts.json';
import './App.css';

const contactState = contacts.splice(0,5);

function App() {
  const [ contact, setContact ] = useState(contactState)

  const randomContactHandler = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomNumber]
    const contactsCopy = [...contact];
        contactsCopy.push(randomContact);
        setContact(contactsCopy); 
  };

  const sortByName = () => {
    const sortedNames = [...contact];

    sortedNames.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase()
        if(nameA < nameB) {
          return -1;
        } if(nameA > nameB) {
          return 1;
        } else {return 0;}
      });

      setContact(sortedNames); 

  }

  const sortByPop = () => {
    const sortedPop = [...contact];

    sortedPop.sort((a, b) => {
        let popA = a.popularity
        let popB = b.popularity
        if(popA > popB) {
          return -1;
        } if(popA < popB) {
          return 1;
        } else {return 0;}
      });

      setContact(sortedPop); 
  }

  const deleteContact = (contactId) => {
    const contactsCopy = [...contact];
    const contactIndex = contactsCopy.findIndex((contact) => contact.id === contactId);
    contactsCopy.splice(contactIndex, 1)
    setContact(contactsCopy)
  }


  return (
    <div className="App">
    <h1>My Awesome Contacts</h1>
      <div>
        <button onClick={() => randomContactHandler()} className="app-btns">Add Random Actor</button>
        <button onClick={() => sortByName()} className="app-btns">Sort by Name</button>
        <button onClick={() => sortByPop()} className="app-btns">Sort by Popularity</button>
      </div>
      <table className="table table-row">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((contactItem) => 
          <tr key={contactItem.id}>
          <td> <img src={contactItem.pictureUrl} className="app-img"/></td>
          <td>{contactItem.name}</td>
          <td>{contactItem.popularity.toFixed(2)}</td>
          <td><button onClick={() => deleteContact(contactItem.id)} className="app-btns">Delete</button></td>
        </tr>)}
      </tbody>
    
    </table>
      
  </div>
  );
}

export default App;
