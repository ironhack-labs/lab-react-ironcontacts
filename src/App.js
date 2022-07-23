// src/App.js
import "./App.css";
import contactslist from './contacts.json';

import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState(contactslist.slice(0,5));
  const [remainingContacts, setRemainingContacts] = useState(contactslist.slice(5));

  const addRandomContact = () => {

      const randomIndex = Math.floor(Math.random() * remainingContacts.length);

      const contactsCopy = [...contacts];
      const remainingContactsCopy = [...remainingContacts];

      const chosenContactArray = remainingContactsCopy.splice(randomIndex, 1);

      contactsCopy.push(chosenContactArray[0]);
      setContacts(contactsCopy);
      setRemainingContacts(remainingContactsCopy);

  };

  const removeContactById = (contactId) => {
       
    const contactsCopy = [...contacts];
    const remainingContactsCopy = [...remainingContacts];

    const contactIndexToRemove = contactsCopy.findIndex(individualContact => {
      return individualContact.id === contactId
    });

    const removedContact = contactsCopy.splice(contactIndexToRemove, 1);

    remainingContactsCopy.push(removedContact[0]);

    setContacts(contactsCopy);
    setRemainingContacts(remainingContactsCopy);

  };

    const sortByName = () => {
      
      const contactsCopy = [...contacts];

      contactsCopy.sort((a,b) => {
        return a.name.localeCompare(b.name)
    });

      setContacts(contactsCopy);
   };

    const sortByPopularity = () => {
      const contactsCopy = [...contacts];

      contactsCopy.sort((a,b) => {
          return b.popularity - a.popularity;

      });
        setContacts(contactsCopy);

    };




  return (

    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
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
          {contacts.map(individualContact => {
            return (
           <tr>
            <td> <img className = "contactImg" src={individualContact.pictureUrl} alt = "contact image" /></td>
            <td>{individualContact.name}</td>
            <td>{individualContact.popularity}</td>
            <td>{individualContact.wonOscar ? '🏆' : ''}</td>
            <td>{individualContact.wonEmmy ? '🏆' : ''}</td>
            <td><button onClick={() => removeContactById(individualContact.id)}>Delete</button></td>
           </tr>
            );
        })}
         </tbody>
       </table>
    </div>
  );
}
export default App;