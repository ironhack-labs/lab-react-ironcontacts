import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {

  const fiveContactList = [...contacts].slice(0, 5);
  const [newContactList, setNewContactList] = useState(fiveContactList);

  const addRandomContact = () => {
    const newContactListCopy = [...newContactList];

    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    newContactListCopy.forEach((contact) => {
      if (contact.id === randomContact.id) {
        return addRandomContact();
      }
    })   
    
    newContactListCopy.push(randomContact);
    setNewContactList(newContactListCopy);     
  }

  const sortByNameHandler = () => {
    const newContactListCopy = [...newContactList];

    newContactListCopy.sort();

    setNewContactList(newContactListCopy);     
  }

  const sortByPopularityHandler = () => {
    const newContactListCopy = [...newContactList];

    newContactListCopy.sort();

    setNewContactList(newContactListCopy);      
  }
  
  const deleteContactHandler = (id) => {
    const newContactListCopy = [...newContactList];

    const contactIndex = newContactListCopy.findIndex((item) => {
      return item.id === id;
    });

    newContactListCopy.splice(contactIndex, 1);

    setNewContactList(newContactListCopy);
  }
   
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="3"><h1>IronContacts</h1></th>
          </tr>
          <tr>
            <td><button onClick={() => {addRandomContact()}}>Add Random Contact</button></td>
            <td><button onClick={() => {sortByNameHandler()}}>Sort by Name</button></td>
            <td><button onClick={() => {sortByPopularityHandler()}}>Sort by Popularity</button></td>
          </tr>
          <tr>
            <td><h2>Picture</h2></td>
            <td><h2>Name</h2></td>
            <td><h2>Popularity</h2></td>
          </tr>
        </thead>
        <tbody>
          {
            newContactList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} height='150'/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={() => {deleteContactHandler(contact.id)}}>Delete</button></td>
                </tr>
              ) 
            })
          }
        </tbody>      
      </table>
    </div>
  );
}

export default App;